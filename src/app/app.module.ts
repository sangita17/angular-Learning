import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WebBasicsComponent } from './web-basics/web-basics.component';
import { WebCallComponent } from './web-call/web-call.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,WebBasicsComponent,WebCallComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
