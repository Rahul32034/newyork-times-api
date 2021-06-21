import { Component, OnInit } from '@angular/core';
import { NewyorkService } from '../newyork.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  news=[];
  constructor(private cs:NewyorkService) {
    this.cs.getArticlesScience().subscribe((data)=>{ 
      this.news=data.results;
      console.log(this.news);
      

   });
   }

  ngOnInit(): void {
  }

}
