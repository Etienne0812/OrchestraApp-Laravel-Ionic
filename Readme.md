# Work schedules management app


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#description">Description</a></li>
        <li><a href="#diagrams">Diagrams</a></li>
        <li><a href="#usability">Usability</a></li>
        <li><a href="#user-requisites">User Requisites</a></li>
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
    <li><a href="#contact">Contact</a></li>
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


## Data model

This database has 4 tables. 

1. Users. This table has the following fields: 

* id-int(10). The primary key of the table
* email-varchar(100). This is the email used to create the account
* password-varchar(100). The password that the user needs to login
* role-int(10). This is what we need to tell if a user is just an employee or an admin

2. Data. This has the following fields: 
* id-int(10). The primary key
* DNI-varchar(10). User's DNI
* Name-varchar(100). User's name
* firstSurname-varchar(100). User's first surname
* secondSurname-varchar(100). User's second surname
* phone-varchar(20). User's phone number
* userEmail-varchar(100). User's email, foreign key from user.email

3. Request. This has the following fields:
* id-int(10). The primary key
* type-varchar(25). Defines the type of request
* reason-varchar(200). The reason why the user is asking for a specific work shift
* startDate-date. The start date of a shift
* endDate-date. The end date of a shift
* revised-varchar(100). The status of the request, it checks if it has been accepted or denied
* userEmail-varchar(100). User's email, foreign key from user.email

4. Status. This has the following fields: 
* id-int(10). The primary key
* type-varchar(25). Defines the type of request
* startDate-date. The start date of a shift
* endDate-date. The end date of a shift
* userEmail-varchar(100). User's email, foreign key from user.email



## Technologic comparison

|   |Description|Advantages| Disadvantages |
|----|---------|------------------ | ------------------|
|WEB|An application designed for browsers (Example:ieselrincon.org)|-They use very little device resources where it is used<br/>-They can be adapted for any device or browser | -Slower than others<br/> -Not accessible throug appstores | 
|NATIVE|An applications that is installed in the device (Example:WhatsApp)|-They work offline<br/>-They are the fastest if they make a efficient use of the resources of the device |-They depends of your device specifications<br/>-If you want to make the app for multiple platforms, you must programm it once for each platform |
|HYBRID|An application that combines the web and native features(Example:Gmail)|-They can be installed and also used in the browser<br/>-You only have to programm once to make it multi platform|-They have a limited user interface options<br/>-Slower transitions between pages |
|PWA|A Web aplication that can be aded to the home screen of a device like a native app (example:Trivago,Pinterest)|-They have offline capabilities<br/>-They use Push Notifications<br/>-No installation or manual updates required |-Compatibility with IOS<br/>-They can´t use all the device capabilities because they aren´t native |

## Usability 

1. Simplicity: This app is very simple to use and to get used to. There are two tabs with just a few buttons. 
2. Colours: The colours in this app are very consistent: mostly black, grey and purple. 
![alt_text](https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic/blob/develop/Images/s1.png)
3. Text: There is very little text in the app, and even in long lists, only the necessary text is displayed.
![alt_text](https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic/blob/develop/Images/s7.png)
4. Font: The font used is consistent along the app
5. Error handling: The app validates every form so you cant't send wrong information. 
![alt_text](https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic/blob/develop/Images/s3.png)
6. Legibility: Every piece of text is totally readable due to a good font and a color that contrasts with the background
7. Use of icons: The app uses icons to make the UI more pleasent to the eye.
![alt_text](https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic/blob/develop/Images/s8.png)
8. Simple info: Every interactive part of this app let the user clearly know it's use: might it be a button that displays the action it is used for or an icon that visually describes it's function.
![alt_text](https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic/blob/develop/Images/s4.png)
9. Just what you need: This app only shows you the elements you need in each moment. For example, icons used to access admin-only functions are not display to regular users, which helps to not confuse them. 
![alt_text](https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic/blob/develop/Images/s2.png)
![alt_text](https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic/blob/develop/Images/s5.png)
10. Feedback: The app gives the user certain info to help them know what's happening
![alt_text](https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic/blob/develop/Images/s6.png)
11. Page names: Pages on the app display their name on top, helping user's quickly realize in which part of the app they are in.
![alt_text](https://github.com/Etienne0812/OrchestraApp-Laravel-Ionic/blob/develop/Images/s9.png)

## User Requisites

1. Platform
* This app will be developed mainly for mobile devices
* It has to work properly on desktop too
2. Users need to login in order to enter the different pages
3. Menu
* Users will see 2 tabs with 2 buttons in each tab
* Users will have 2 roles: admin and regular user
* Depending on the role more or less options will be available for the user
* There will be search options to find certain info
* If no content matches the search, users will be notified
4. Users will be asked when deleting things
5. USers will be asked when creating smething
6. If a request on the database fails, users will be notified
7. Users can be authenticated using digital cert
8. Users can select between specific options when creating requests
9. USers can see with which account they are logged in
10. Admins can filter requests by creation dates




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

# Contact
* Contact the dev: etisvita@gmail.com

# Acknowledgements
* [Ionic documentation](https://ionicframework.com/docs) Really good tutorials offered by ionic itself
* [Laravel documentation](https://laravel.com/docs/8.x) Simple and very useful tutorials 
* [Laravel CRUD tutorial](https://www.itsolutionstuff.com/post/laravel-8-crud-application-tutorial-for-beginnersexample.html) Very good to start using Laravel
* [Tcrurav GitHub](https://github.com/tcrurav) Many examples on how to use Ionic and Laravel
* [Laravel AUTH tutorial](https://medium.com/@flicher/laravel-rest-api-passport-authentication-for-ionic-app-3934713bcdf7) Easy to understand and to make it work, great for simple AUTH
