import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 7';

  // declared array of months.
  months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];

  // set to false;
  isAvailable = false;

  myClickFunction(event){
    alert("Button is clicked");
    console.log(event);
  }

  changeMonths(event){
    alert("Changed month from the Dropdown");
    console.log("Changed month from the Dropdown");
    console.log(event);
  }

  todayDate = new Date();
  jsonVal = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
}
