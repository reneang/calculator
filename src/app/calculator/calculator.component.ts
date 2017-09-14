import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1 : number;
  number2 : number;
  result : number ;

  constructor(private hasil:DataService) { }
  
  tambah() :void {
    this.result = this.hasil.Sum(this.number1, this.number2);
    //this.result = +this.number1 + +this.number2
  };
  kurang() :void {this.result = +this.number1 - +this.number2};
  kali() :void {this.result = +this.number1 * +this.number2};
  bagi() :void {this.result = +this.number1 / +this.number2};
  pangkat() :void {this.result = Math.pow (+this.number1, this.number2)};
  akar() :void {this.result = Math.pow (+this.number1, 1/this.number2)};
  modulus() :void {this.result = +this.number1 % +this.number2};
  // sum :void {this.result = Number(this.angka1) + Number(this.angka2)};
  // tambah() :void {this.result = this.number1 + this.number2};


  ngOnInit() {

  }

}
