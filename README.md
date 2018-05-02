# MaterialComponents-Angular-POC

Proof Of Concept of an [Angular](https://angular.io/) app using [Angular Material](https://material.angular.io/) CSS framework.

The intent of this project is just to evaluate the different features/components of both frameworks. Any task related with testing, deploying, UX or any other development practice is out of the scope.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

The docs/ folder contains the production build of the project. 

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

## Notes on client-side routing

GitHub Pages/docs doesn’t support routers that use the HTML5 `pushState` history API under the hood. This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here is a solution:

* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).
