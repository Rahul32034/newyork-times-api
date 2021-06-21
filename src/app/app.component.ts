import { Component } from '@angular/core';
import { NewyorkService } from './newyork.service';
//import {WorldComponent} from './newyork.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nytimes';
  
  constructor()
  {
    
  }
}
