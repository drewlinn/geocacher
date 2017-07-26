# Geocacher

#### Javascript Week 4 Code Review: A Geocacher Application.

#### By **Andrew Dalton**

## Description
  * This application is designed to help the user locate nearby (or distant) geocaches by using either their physical address or its latitude and longitude.

## Planning

1. Configuration/dependencies
  * This should include ALL dependencies.

  * Install the following packages:
    * npm install - allows us to install back-end packages.
    * bower install - allows us to manage front-end packages.
        * bootstrap - installed with bower for the front end, this provides us with some rudimentary page styling tools.

  2. Specifications

  | Behavior | Input | Output |
  | :--------| :---- | :------|
  | User can enter the latitude and longitude of a geocache and receive the corresponding physical address | "40.714224", "-73.961452" | "277 Bedford Avenue, NY, 11211, United States" |
  | User can enter a physical address and receive the corresponding latitude and longitude | "277 Bedford Avenue, NY, 11211, United States" | "40.714224", "-73.961452" |

3. Integration
  * index.html, welcome.component, app.component, app.module, and app.routing for application entry, navigation, and integration.
  * about.component to provide more information about our club.
  * members.component for viewing a list of all members.
  * member-detail.component for viewing the details of an individual member.
  * admin.component for an administrator to add, edit, and delete club members.
  * member-new.component for the club administrator to add a new a member to the club.
  * member-edit.component for the club administrator modify an existing member's information.

## Setup/Installation Requirements

* Open your console or powershell command line.
* In your command line, navigate to the desktop or your desired folder destination.
* Copy the project's github address (https://github.com/drewlinn/geocacher.git)
* Write in your console the command "git clone" and paste the project address afterward and press enter.
* Use your console to navigate to the project directory and perform 'npm install' and 'bower install' commands
* Create a file called 'api-keys.ts' in the 'src/app' folder of the project directory.
* Open your browser and navigate to https://developers.google.com/maps/documentation/geocoding/start in your web browser.
* Login with Google credentials. If necessary, create an account.
* in the window, select the 'Create a New Project' option; provide it with a name (geocacher).
* You should then receive an api-key. Copy that and paste it into your 'api-keys.ts' file in quotations, preceded by 'export var geoKey:', like so:
  export var geoKey: "{YOUR-API-KEY-GOES-HERE}";

* Make sure to save the file.
* In your console (make sure you are still in the project directory), perform the commands 'ng build' followed by 'ng serve'
* In your Web Browser, navigate to 'localhost:4200'
* The application should successfully be displayed with full functionality.

  ## Angular-CLI Troubleshooting
    ## Development server

    Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

    ## Code scaffolding

    Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

    ## Build

    Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

    ## Running unit tests

    Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

    ## Running end-to-end tests

    Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
    Before running the tests make sure you are serving the app via `ng serve`.

    ## Further help

    To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs

None currently known.

## Support and contact details

If you notice any issues with my program or bugs with my code, please contact me at expandrew@gmail.com.

## Technologies Used

  * HTML
  * Javascript
  * Typescript
  * Angular2
  * CSS
  * Bootstrap
  * Node Package Manager
  * Bower

### License

*This software is licensed under the GPL*

Copyright (c) 2016 **Andrew Dalton, Epicodus**
