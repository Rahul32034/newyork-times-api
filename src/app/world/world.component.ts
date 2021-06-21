import { Component, OnInit } from '@angular/core';
import { NewyorkService } from '../newyork.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  news=[];
  constructor(private cs:NewyorkService) {
    this.cs.getArticlesworld().subscribe((data)=>{ 
      this.news=data.results;
      console.log(this.news);
      

   });
   }

  ngOnInit(): void {
  }

}
