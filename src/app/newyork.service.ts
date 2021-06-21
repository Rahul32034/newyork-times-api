import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewyorkService {
  
  constructor(private http:HttpClient) { }
  getArticles():Observable<any>
  {
    
    return this.http.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=DQzYmuFosTjtvhhWtVOBS2AImFWTuxFA");
  }
  getArticlesworld():Observable<any>
  {
    
    return this.http.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=DQzYmuFosTjtvhhWtVOBS2AImFWTuxFA");
  }
  getArticlesUs():Observable<any>
  {
    
    return this.http.get("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=DQzYmuFosTjtvhhWtVOBS2AImFWTuxFA");
  }
  getArticlesArt():Observable<any>
  {
    
    return this.http.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=DQzYmuFosTjtvhhWtVOBS2AImFWTuxFA");
  }
  getArticlesScience():Observable<any>
  {
    
    return this.http.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=DQzYmuFosTjtvhhWtVOBS2AImFWTuxFA");
  }
  
}
