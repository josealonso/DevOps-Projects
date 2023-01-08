
### Goal

Set up Jenkins in a Docker container for automating the building and 
testing of a Spring Boot Java application.

### Setting up Jenkins in Docker

By creating a network we can make it easier and simpler to access and manage the Jenkins container.

- Create a Docker network

```
docker network create --subnet=172.68.0.0 jenkins
```

- Create a *Dockerfile*

```
FROM jenkins/jenkins:lts

USER root

RUN apt-get update
RUN apt-get \
    --yes --allow-downgrades \
    install \
    curl \
    vim \
    telnet \
    wget \
    maven

RUN java -version

RUN chown -R jenkins /var/jenkins_home

RUN chmod 777 /tmp
```

We do not install Java since Jenkins is Java-based and it is already provided.

- Build the new image

`docker build . -t devops_jenkins:1`

- Run the docker container

```
docker run \
    -v /tmp/jenkins/home:/var/jenkins_home \
    --net jenkins --ip 172.68.0.10 \       # random IP from the subnetwork
    --detach \
    --name devops_jenkins devops_jenkins:1
```

- Check the container is running with no errors

`docker container ls`

`docker logs devops_jenkins --follow`

### First run

- Type http://172.168.0.10:8080 in any web browser.

Initial configuration:

- Unlock the Jenkins web portal.

  ```
  cat /tmp/jenkins/home/secrets/initialAdminPassword
  ```

- Install suggested plugins.


### First job in Jenkins

- Select Build ---> Pipeline

- Paste this (Groovy) script in the *Pipeline section*

```
pipeline {
    agent any
    stages {
        stage('Clone java repo') {
            steps {
                script {
                    dir("${WORKSPACE}") {
                        git branch: "master",
                        url: "https://github.com/josealonso/productservice.git"
                    }
                }
            }
        }
        stage('MVN Install') {
            steps {
                script {
                    dir("${WORKSPACE}") {
                        sh "mvn compile"
                    }
                }
            }
        }
    }
}
```

### Test the Java application

```
pipeline {
    agent any
    stages {
        stage('Clone java repo') {
            steps {
                script {
                    dir("${WORKSPACE}") {
                        git branch: "master",
                        url: "https://github.com/josealonso/productservice.git"
                    }
                }
            }
        }
        stage('MVN Install') {
            steps {
                script {
                    dir("${WORKSPACE}") {
                        sh "mvn compile"
                    }
                }
            }
        }
        stage('MVN Test') {
            steps {
                script {
                    dir("${WORKSPACE}") {
                        sh "mvn test"
                    }
                }
            }
    }
}
```

### Run the Java application

```
pipeline {
    agent any
    stages {
        stage('Clone java repo') {
            steps {
                script {
                    dir("${WORKSPACE}") {
                        git branch: "master",
                        url: "https://github.com/josealonso/productservice.git"
                    }
                }
            }
        }
        stage('MVN Install') {
            steps {
                script {
                    dir("${WORKSPACE}") {
                        sh "mvn compile"
                    }
                }
            }
        }
        stage('MVN Execute') {
            steps {
                script {
                    dir("${WORKSPACE}") {
                        sh "mvn exec:java"
                    }
                }
            }
    }
}





