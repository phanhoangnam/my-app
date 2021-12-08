import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '12';
  name = 'Nam';
  age = '22';
  getName(name:any){
    alert("Hello " + name);
  }

  getData(val:string){
    console.warn(val);
  }

  displayValue = '';
  getValue(val:string){
    console.warn(val);
    this.displayValue = val;
  }

  count=0;
  counter(type:string){
    type==="add"?this.count++:this.count--;
  }
}
