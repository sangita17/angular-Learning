import { Component, OnInit } from '@angular/core';
import {WebCallComponent} from '../web-call/web-call.component'
import {WebCallService} from '../web-call/web-call.service'
import {customOrderByPipe} from '../web-basics/customPipe'
@Component({
  selector: 'app-web-basics',
  templateUrl: './web-basics.component.html',
  styleUrls: ['./web-basics.component.css']
})
export class WebBasicsComponent implements OnInit {
webgallery;
menuItems;
bithday= '1990/01/17';
  constructor(private webService : WebCallService) { }

  ngOnInit() {
    this.webgallery = new WebCallComponent().gallery;
    this.webService.getMenuItems().subscribe(menu =>{
      this.menuItems=menu
    });
  }

}