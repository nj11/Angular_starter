### Simple App to get you quickly started on building full stack application using Angular 8 and Spring Boot 2 .
#### Demonstrates usage of angular material libraries for frontend development, gradle for builds and  deployment on amazon beanstalk.

### Prerequites to Run the Application

### Install NodeJS

Refer https://nodejs.org/en/ to install NodeJS

### Install Angular CLI

Use the following command to install angular CLI

```bash
npm install -g @angular/cli
```

Refer https://cli.angular.io/ to know more about angular CLI


## Steps to Run the Application

Open the client folder and install the npm packages using the following commands

```bash
cd client
npm install
```

Go Back to the Parent Project Folder and build the package using the following commands

```bash
cd ..
gradlew clean build
```

Go to server folder and start the Application using the following commands

```bash
cd server
gradlew spring-boot:run
```

The Application runs on **localhost:8080** and the application runs in a embedded container in local

## Folder Structure

**client** : This has the Client Code implemented using Angular 8

**server** : This has the Springboot code


## Screenshots


![Alt desc](https://github.com/nj11/Angular_starter/blob/master/screenshots/home.png)

Material table datasource <mat-table> with server side pagination and sorting and expandable rows.

![Alt desc](https://github.com/nj11/Angular_starter/blob/master/screenshots/mattableserver.png)


Material table datasource <mat-table> with client side pagination and sorting and exportable content.

![Alt desc](https://github.com/nj11/Angular_starter/blob/master/screenshots/mattableclient.png)


       
