import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-component',
  templateUrl: './practice-component.component.html',
  styleUrls: ['./practice-component.component.css']
})
export class PracticeComponentComponent {

  constructor(){
    this.C=0;
    this.F=0;
  }
  public C:number;
  public F:number;

   public changeToFahrenheit(e:any){
     this.C=e.target.value;
     
     this.F=(this.C*9)/5 +32;
   }

   public changeToCelsius(e:any){
    this.F=e.target.value;
    this.C=(this.F -32)* 5/9;
   }


}
