# service-cm19a
Provides the service to remotely control the cm19a

## usage
Hit the webserver on the default port 1771 passing in the following get variables
```
houseCode  = a->o
unitCode   = 1->16
statusCode = -,+
```
eg. http://localhost:1771/?houseCode=a&unitCode=1&statusCode=+
