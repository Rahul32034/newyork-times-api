import { Component, OnInit } from '@angular/core';
import { NewyorkService } from '../newyork.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  news=[];
  constructor(private cs:NewyorkService) {
    this.cs.getArticlesArt().subscribe((data)=>{ 
      this.news=data.results;
      console.log(this.news);
      

   });
   }

  ngOnInit(): void {
  }

}
