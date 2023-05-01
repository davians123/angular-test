import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  posts : any;
  constructor(private http: HttpClient) {}
  ngOnInit(){
      this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => { this.posts = response; console.log(response)})
    }
}
