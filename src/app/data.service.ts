import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  array1 : string[] = ['','',''];
  array2 : number[] = [1,2,3,4,5];
  obj : object = { 
    "name" : "AVC",
    "address" : "address 1"
  };
  array3 : object[] = [this.obj];

  array4 : object[] = [ 
    {"name" : "AVC", "address" : "address 1"},
    {"name" : "AVC", "address" : "address 1"},
    {"name" : "AVC", "address" : "address 1"},
    {"name" : "AVC", "address" : "address 1"},
  ];
  

  GetData() :string{
    for (var i = 0; i < this.array4.length; i++) {
      console.log(this.array4[i]['name']);
    }

    this.array4.forEach(element=>
    {
      console.log(element['address']);
    });

    this.array4.push({ "name" : "Loka" , "address" : "address2"});
    return "Alo";
  }

  Sum(number1:number, number2:number) : number {
    var result = number1 + number2;
    return result;
  }

  constructor() { }

}
