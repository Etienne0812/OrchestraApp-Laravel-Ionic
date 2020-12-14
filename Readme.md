# Work schedules management app


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

# About

1. [Description](##description) 
2. [Diagramas](##diagrams) 
3. [Built with](##built-with)
4. [Programms](#programs)

## Description
This app is used to manage the different needs of a company in order to have clear work schedules for each employee. 
Employees can request an specific work turn and admins can accept or reject those requests. 

## Diagrams
* Use Case Diagram: 
![alt_text](https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic/blob/develop/Images/OrchestraUse.jpg)
* Entity-Relationship Diagram:
![alt_text](https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic/blob/develop/Images/OrchestraEntityRelationshp.jpg)
* UML Diagram: 
![alt_text](https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic/blob/develop/Images/Screenshot_1.png)
* You can check the mockups [here](https://xd.adobe.com/view/4212c33b-9a57-460b-a348-61738bdee0e8-1741/?fullscreen&hints=off)

## Built with
This app has been built using the next technologies:
* [PHP](https://www.php.net/)
* [Laravel](https://laravel.com/)
* [Ionic](https://ionicframework.com/)
* [Angular](https://angular.io/)
* [MySQL](https://www.mysql.com/)
* [Composer](https://getcomposer.org/)
## Programms
I personally have used these programms. It is personal preference, but I recommend all of them: 
* [VSCode](https://code.visualstudio.com/download)
* [DataGrip](https://www.jetbrains.com/datagrip/download/)
* [XaMPP](https://www.apachefriends.org/download.html)
* [Postman](https://www.postman.com/downloads/)

# Getting started


## Prerequisites


In order to make this app work locally, you will need to: 

* Install Ionic using the next command:
``` markdown
npm install -g @ionic/cli
```
* Run the Composer Installer 

## Usage
* Clone this repo:
``` markdown
git clone https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic
```
* You will have to create the database. More info [here](##backend-installation).

* In order to get the app working, you will need to run the following commands:
   + While is the folder OrchestraBackend: 
   ``` markdown
    php artisan serve
    ```
    + While in the folder OrchestraFrontend:
    ``` markdown
    ionic serve
    ```

# Installation

## Backend Installation
* PHP Installation: I recommend you to install Xampp, this programm comes with a PHP version installed. If you don't use Xampp, please check [PHP documentation](https://www.php.net/)

* Once you have PHP installed, you have to use [Composer](https://getcomposer.org/). Execute it and then select your PHP version


* Then, create a blank mySQL database

* Once you have the repo on you device, you will have to access OrchestraBackend. 

* Modify your .env: This file should have the info needed to access your database: Database name, the user, the password etc. 

* Then, use the next command in your terminal:
``` markdown
php artisan migrate
```

## Frontend Installation
* In order to use Ionic, you have to install [Node.js](https://nodejs.org/en/download/) 

* Then, you have to execute the next commands: 
``` markdown
npm uninstall -g ionic
npm install -g @ionic/cli
```



# Acknowledgements
* [Ionic documentation](https://ionicframework.com/docs) Really good tutorials offered by ionic itself
* [Laravel documentation](https://laravel.com/docs/8.x) Simple and very useful tutorials 
* [Laravel CRUD tutorial](https://www.itsolutionstuff.com/post/laravel-8-crud-application-tutorial-for-beginnersexample.html) Very good to start using Laravel
* [Tcrurav GitHub](https://github.com/tcrurav) Many examples on how to use Ionic and Laravel
* [Laravel AUTH tutorial](https://medium.com/@flicher/laravel-rest-api-passport-authentication-for-ionic-app-3934713bcdf7) Easy to understand and to make it work, great for simple AUTH
