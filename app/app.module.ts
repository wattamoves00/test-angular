import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

@NgModule({
imports:[BrowserModule],
declarations:[AppComponent],
bootstrap:[AppComponent]
})


export class AppModule{


}

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(AppModule);