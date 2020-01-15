import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

// console.log('Hello from my-example-app');

@Component({
    selector: 'app-root',
    template: '<h1>Hello World</h1> <p>A message from Hosanna</p> <app-welcome></app-welcome>'
})
class HelloWorldComponent{

}

@Component({
    selector: 'app-welcome',
    template:  '<h3>Welcome to Angular 7 Training<h3>'
})
class WelcomeComponent{

}

@NgModule({
    bootstrap: [HelloWorldComponent],
    declarations: [
        //list of all components
        HelloWorldComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule 
    ]
})
class AppModule{

}

platformBrowserDynamic().bootstrapModule(AppModule)