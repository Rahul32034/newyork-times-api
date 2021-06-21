import { Component, OnInit } from '@angular/core';
import { NewyorkService } from '../newyork.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  news=[];
  constructor(private cs:NewyorkService) {
    this.cs.getArticles().subscribe((data)=>{ 
      this.news=data.results;
      console.log(this.news);
      

   });
   }

  ngOnInit(): void {
  }

}
