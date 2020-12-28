import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

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

  todayDate;
  jsonVal = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};

  componentProperty;
  public personData = [];
  constructor(private myService: MyServiceService) {}
  ngOnInit() {
        this.todayDate = this.myService.showTodayDate();
        console.log(this.myService.serviceProperty);
        this.myService.serviceProperty = "component created";
        this.componentProperty = this.myService.serviceProperty;

        this.myService.getData().subscribe((data) => {
                 this.personData = Array.from(Object.keys(data), k=>data[k]);
                 console.log(this.personData);
              });
     }
}
