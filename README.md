# cm19a Remote Control Web Service
Provides the service to remotely control the cm19a

## Usage
### Starting the service
```
node app
```

### Invoking the service
Hit the webserver on the default port 1771 passing in the following get variables
```
houseCode  = a->o
unitCode   = 1->16
statusCode = -,+
```
eg. http://localhost:1771/?houseCode=a&unitCode=1&statusCode=+
