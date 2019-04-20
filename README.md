# AngularWebComponentExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Build WebComponents

Run npm run build && npm run package

Import dist/ng-button-element.js in HTML to use. See index.html in parent folder

## Steps to create WebComponents

1. ng add @angular/elements
2. npm i @webcomponents/custom-elements --save
3. Add two new imports in polyfills.ts
import '@webcomponents/custom-elements/src/native-shim';
import '@webcomponents/custom-elements/custom-elements.min';
4. ng g component ng-button --inline-style --inline-template -v Native
5. Update AppModule.ts
Inject Injector - constructor(private injector: Injector) {}
Add entry component - entryComponents: [NgButtonComponent]
Remove bootstrap
Hook up ngDoBootstrap Create customelement using createCustomElement  
Export custom element using customElements.define
6. Update Package.json
"package": "cat ./dist/angular-web-component-example/runtime.js ./dist/angular-web-component-example/polyfills.js ./dist/angular-web-component-example/scripts.js ./dist/angular-web-component-example/main.js > dist/ng-button-element.js"
7. For easy packaging control 
install npm install --save-dev concat fs-extra
8. Update Package.json
"build:elements": "ng build --prod --output-hashing none && node build-elements.js",
9. Run npm run build:elements
