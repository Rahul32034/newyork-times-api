import { Component, OnInit } from '@angular/core';
import {NewyorkService} from '../newyork.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  news=[];
  post_id=0;
  post_title;
  post_content;
  post_image;
  post_date;
  post_section;
  constructor(private activate:ActivatedRoute,private cs:NewyorkService) {
    this.post_id=activate.snapshot.params.id;
    //alert(this.post_id);
    this.cs.getArticles().subscribe((data)=>{ 
      this.news=data.results;
      console.log(this.news);
      this.post_section=this.news[this.post_id].section;
      this.post_title=this.news[this.post_id].title;      
      this.post_content=this.news[this.post_id].abstract;
      this.post_date=this.news[this.post_id].created_date;
      this.post_image=this.news[this.post_id].multimedia[0].url;
   });
  
   
   }


  ngOnInit(): void {
  }

}
