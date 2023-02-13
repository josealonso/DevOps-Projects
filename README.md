### Kubernetes

Kubernetes has its own repository: https://github.com/josealonso/Kubernetes

### Install VirtualBox and Vagrant

```
$ sudo apt install virtualbox 

$ curl -O https://releases.hashicorp.com/vagrant/2.2.9/vagrant_2.2.9_x86_64.deb
$ sudo apt install ./vagrant_2.2.9_x86_64.deb
```

### About the Vagrant project

Five differentes instances are deployed on a local VirtualBox machine:

- Nginx: web server. 
- Tomcat: application server (for a Spring Boot app).
- RabbitMQ: message broker.
- Memcached: caching database system. 
- MySQL: database.

Command to bring up and provision the five services:
```
vagrant up
```

### Jenkins Pipeline as a code

- Tools used: Jenkins, Nexus and Sonarqube.
- Running on EC2 instances. Three different instances are needed.
- Different Jenkins plugins are needed.

- Automate pipeline setup with Jenkinsfile.
- Jenkinsfile is a text file with Pipeline DSL Syntax.
- Similar to Groovy.

#### Pipeline Concepts

- Node/Agent.
- Stage.
- Step.

============= FLOW ==============

1.- Write the Java code locally.

2.- The Jenkins server takes the control: run unit tests and code static analysis 
on the Sonarqube server. 

3.- If the code passes the two steps mentioned above, the Nexus server builds 
the artifact.

4.- The artifact is deployed on an application server like Tomcat. 
This deployment is automatic if continuous deployment is configured.

#### Problem

Operational overhead to maintain servers: Jenkins, Nexus, Sonar, database.

### Cloud Services for CI

CI Pipeline on AWS. Services used:

- Code Commit as the Version Control System on AWS.

- Code Artifact as the Maven repository for dependencies.

- Code Build as the Build Service.

- Code Deploy.

- CodePipeline to integrate all jobs together.

The artifact is deployed to a S3 bucket.



















