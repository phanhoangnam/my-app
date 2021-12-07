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
  getVal(){
    return "This is my code";
  }
}
