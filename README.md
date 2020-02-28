### Simple App to get you quickly started on building full stack application using Angular 8 and Spring Boot 2 .
#### Demonstrates usage of angular material libraries like material table,materal dialog,material reactive forms,snackbar etc for frontend development, gradle for builds and  steps for deployment on amazon beanstalk.

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


## AWS Beanstalk deployment

Sign in to to AWS console using your account .Navigate to ```My Account--> AWS Management Console.```
Go to  ```Services-->Elastic beanstalk```   and then select ```Create a new application.```
       
![Alt desc](https://github.com/nj11/Angular_starter/blob/master/screenshots/aws1.png)


![Alt desc](https://github.com/nj11/Angular_starter/blob/master/screenshots/aws2.png)

Select the appropriate tier.In this case we are selecting Web server environment.

Enter your application details.

![Alt desc](https://github.com/nj11/Angular_starter/blob/master/screenshots/aws3.png)

Enter application platform, in this case it's Java

![Alt desc](https://github.com/nj11/Angular_starter/blob/master/screenshots/aws4.png)

For now choose sample application.We will upload and deploy application war later.
![Alt desc](https://github.com/nj11/Angular_starter/blob/master/screenshots/aws5.png)

Environment creation takes a few minutes.

![Alt desc](https://github.com/nj11/Angular_starter/blob/master/screenshots/aws6.png)

Once the environment is ready, click on the enviornment name link as highlighted.

![Alt desc](https://github.com/nj11/Angular_starter/blob/master/screenshots/aws7.png)

You can check the environment page, along with configuration details like enviornment variables,logs and application URL.
Click on upload and deploy to upload your war to the new environment.
![Alt desc](https://github.com/nj11/Angular_starter/blob/master/screenshots/aws8.png)
    
    
![Alt desc](https://github.com/nj11/Angular_starter/blob/master/screenshots/aws9.png)


