# Simple App Using Angular 8 as Front End and Spring Boot 2 as the Server

## Prerequites to Run the Application

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

![image](https://user-images.githubusercontent.com/17017086/51055985-338b4e00-15a7-11e9-9088-2c7bea5542e7.png)

![image](https://user-images.githubusercontent.com/17017086/51056018-46058780-15a7-11e9-89e4-b2f8e827209d.png)

![image](https://user-images.githubusercontent.com/17017086/51056028-5453a380-15a7-11e9-8f5c-c179121fbd8b.png)
       
