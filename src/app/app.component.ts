import { Component } from '@angular/core';
import { MyDataService } from "./my-data.service";

//dependensi terhadap @angular.core

@Component({
  selector: 'app-root',
  //bukan default system, bisa di custom, untuk memanggil element di HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private data : MyDataService){}
  myProp : string = "";
  myProp2 : number = 10;
  myProp3 : object = 
  {
    "name":"My name",
    "telephone" : "My Phone Number"
  };
  myProp4 : string[] = ["AA","BB","CC"];

  changeValue() :void {
    this.myProp = "New Value"
  }
}


