# MaterialComponents-Angular-POC

Proof Of Concept of an Angular app using [Angular Material](https://material.angular.io/) CSS framework

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Adding Angular Material

Follow the instructions in this [blog](https://alligator.io/angular/angular-material-2/)

## Adding Material Icons Locally

Run `npm install material-design-icons-iconfont --save` to install the package

Add the following configuration to `.angular-cli.json file` in order to copy the font folder to the root or dist folder when runing `ng serve` or `ng build` respectively

```json
"assets": [
        "assets",
        "favicon.ico",
        { "glob": "**/*", "input": "../node_modules/material-design-icons-iconfont/dist/fonts", "output": "./fonts/" }

      ],
```

Within `styles.scss` file, set $material-design-font-path to the new location and import Material Icons

```scss
$material-design-icons-font-path: '/fonts/';

@import "material-design-icons-iconfont/dist/material-design-icons.scss";
```
