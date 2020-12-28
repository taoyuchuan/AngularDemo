import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  newcomponent = "Entered in new component created";
  constructor(private myService: MyServiceService) { }
  todayDate;
  newComponentProperty;

  ngOnInit() {
    this.todayDate = this.myService.showTodayDate();
    this.newComponentProperty = this.myService.serviceProperty;
  }

}
