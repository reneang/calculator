import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ; //untuk data binding 
import { RouterModule } from '@angular/router' ; // untuk routing dan navigation

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Webcomponent1Component } from './webcomponent1/webcomponent1.component';
import { Webcomponent2Component } from './webcomponent2/webcomponent2.component';
import { Webcomponent3Component } from './webcomponent3/webcomponent3.component';
import { Webcomponent4Component } from './webcomponent4/webcomponent4.component';
import { Webcomponent5Component } from './webcomponent5/webcomponent5.component';

import { MyDataService } from "./my-data.service";
import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    CalculatorComponent,
    Webcomponent1Component,
    Webcomponent2Component,
    Webcomponent3Component,
    Webcomponent4Component,
    Webcomponent5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot ([
      { path : '', component : CalculatorComponent },
      { path : 'mycomponent', component : MyComponentComponent}
    ])
  ],
  providers: [DataService, MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
