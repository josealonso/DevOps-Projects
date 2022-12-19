### Install VirtualBox and Vagrant

```
$ sudo apt install virtualbox 

$ curl -O https://releases.hashicorp.com/vagrant/2.2.9/vagrant_2.2.9_x86_64.deb
$ sudo apt install ./vagrant_2.2.9_x86_64.deb
```

### About this project

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



