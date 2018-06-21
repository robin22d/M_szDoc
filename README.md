# M_Doc application which allows the user to interface with the database

## Run the application

Clone the repo

Install node modules
```
npm i
```

Run a build
```
npm run build
```

Build docker containers
```
docker-compose build
```

Start application
```
docker-compose up
```

Then go to:
```
http://localhost:9090/
```

To run in background user -d

## Know Eorros

* When the refresh button is pressed routing does not work properly usr has to go back to /.

* Next and back buttons are not limited.

* Store is not cleared every time which brakes next and back buttons