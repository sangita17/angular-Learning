import { Component, OnInit } from '@angular/core';
import {WebCallComponent} from '../web-call/web-call.component'
import {WebCallService} from '../web-call/web-call.service'
import {customOrderByPipe} from './customPipe'

@Component({
  selector: 'app-web-basics',
  templateUrl: './web-basics.component.html',
  styleUrls: ['./web-basics.component.css']
})
export class WebBasicsComponent implements OnInit {
webgallery;
menuItems;
bithday= '1990/01/17';
order = "title";
 
restaurantLists = [
    { name: "Himalya Tempura", address: "9-1-3, Sishin-cho, Edogawa-Ku", price: 3244 },
    { name: "Bikora Tempura", address: "1-1-3, Mishin-cho, Edogawa-Ku", price: 2244},
    {name: "Lohama Tempura", address: "5-1-3, Tishin-cho, Edogawa-Ku", price: 4244 },
  ];

  constructor(private webService : WebCallService) { }

  ngOnInit() {
    this.webgallery = new WebCallComponent().gallery;
    this.webService.getMenuItems().subscribe(menu =>{
      this.menuItems=menu
    });
  }

}