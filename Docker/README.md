### Comandos básicos

docker run ---> descarga y ejecuta la imagen
docker pull ---> descarga la imagen
docker images ---> lista las imágenes que tengo en mi computadora
docker ps ---> muestra el estado de los contenedores
docker start ---> arranca un contenedor (en segundo  plano)
docker stop ----> detiene un contenedor
docker logs ----> muestra la salida del contenedor
docker exec ---> ejecuta un comando dentro de un contenedor que ya está en ejecución.
docker run -d ---> ejecuta la imagen en segundo plano.
docker build ---> construye un contenedor (genera una imagen)
docker push ---> sube la imagen al registro de Docker
volúmenes ---> para persistir datos de la aplicación
docker run -d -v todo-mysql-data:/var/lib/mysql \
-e MYSQL_ROOT_DATABASE=secret \
-e MYSQL_DATABASE=todos \
mysql:5.7
 
 ### Docker-compose

 Permite ejecutar varios contenedores Docker.

 ```
 docker-compose up -d
 ```

Detiene todos los contenedores
```
 docker-compose down
```


### Comandos de Linux

- ls -alh
- alias ll='ls -l'
- cp -a
- rm
- mv 
- rsync -av (copia incremental)
- touch
- du -sh
- tree
- stat
- zip -r, unzip --->
- find . -iname 'Archivo*'
- cal
- bc ---> calculadora
- ps fax
- curl ifconfig.me ---> muestra tu IP
- cat
- grep
- df -h, free
- top, htop ---> administrador de tareas

- netstat -natup
- tcpdum -i any tcp port 80
- nmap ---> muestra los puertos abiertos
- locate
- screen
- tail -f, head
- ssh
- cat /proc/loadavg







