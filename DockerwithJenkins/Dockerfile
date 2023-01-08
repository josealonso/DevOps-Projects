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


