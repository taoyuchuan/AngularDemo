import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  serviceProperty = "Service Created";
  constructor() { }
  showTodayDate() {
    let date = new Date();
    return date;
  }
}
