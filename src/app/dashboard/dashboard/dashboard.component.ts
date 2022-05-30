import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  firstName = '';
  lastName = '';
  age='';
  email = '';
  mobile = '';
  bgColor:number=1


  constructor() { }

  ngOnInit(): void {
  }
  color(index:number){
    console.log(index);
    
    this.bgColor=index
  }


}
