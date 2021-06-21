import { Component, OnInit } from '@angular/core';
import { NewyorkService } from '../newyork.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {
  news=[];
  constructor(private cs:NewyorkService) {
    this.cs.getArticlesUs().subscribe((data)=>{ 
      this.news=data.results;
      console.log(this.news);
      

   });
   }

  ngOnInit(): void {
  }

}
