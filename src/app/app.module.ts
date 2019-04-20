import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { NgButtonComponent } from './ng-button/ng-button.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    NgButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [NgButtonComponent]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(NgButtonComponent, {injector: this.injector});
    customElements.define('ng-button', customElement);
  }

 }
