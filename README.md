# react_spring_mysql_mini
## aplicacion crud sencilla 


no todos los archivos estan compilados, pero con los Dockerfile se asegura que se desplieguen y 
se compilen automaticamente aunque tome un tiempo.
### Funcionamiento
## Requisitos

* Docker
* Docker compose

la aplcacion empieza en el puerto 80 de su localhost, en caso de usar docker toolbox en windows es en la ip 192.168.99.100, el proxy_loadbalancer entra por el puerto 81,
el backend por 8081 y 8080 respectivamente.
Aunque el funcionamiento interno es una red interna
en la que tienen sus propios puertos.

los datos de la base de datos persisten aun si el contenedor es eliminado. 
## Desplegar

para desplegar se necesario docker-compose y ejecutar el comando desde la raiz
del proyecto " ~docker-compose up -d" esto se encargara de desplegar los contenedores.

#NOTA aunque vuelva a apagar el equipo los contenedores se levantan automaticamente al volver a cargar el daemon de docker por lo que si quiere detenerlos tiene que usar " ~ docker-comopose down ~ " en el directorio raiz y para eliminarlos,
con " ~ docker-compose kill && docker-compose rm ~ " si quiere eliminar el volumen tamvien agregar  " ~ docker-compose kill && docker-compose rm -fv ~ " 

### Problemas

Este es un remake en Spring de una aplicacion monolitica diseñada anteriormente en un servidor glassfish5 usando jersey y jdbc
y contiene varias diferencias y fallos respecto al anterior. Este mini proyecto se penso como una pequeña implementacion de la arquitectura de microservicios, springboot e hibernate, aunque solo exista un servicio y probablemente asi sea durante mucho tiempo. (por que tarda bastante en compilar t es un pesar) (y nisiquiera te asegura que sirva Dx) ya que es necesario que docker compile cada uno de los servicios disponibles, para asegurarse que si o si todo se despliegue correctamente.

## TODO

* En este hibernate no se ha implementado la funcion de buscar por similitud de nombre
* La tabla usuario y el servicio usuario no esta implementado
* nula seguridad 
* falta implementar patron CDI/Singleton en algunas entidades
