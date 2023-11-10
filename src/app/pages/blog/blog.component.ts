import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  allPosts = [
    { title: 'Resume Creation with Canva', 
      author: 'Madison Blotter', 
      date: '11 November 2023',
      body: 'Lorem ipsum dolor sit amet ...' },
    { title: 'Intro to Web Development', 
      author: 'Madison Blotter', 
      date: '30 October 2023',
      body: 'Lorem ipsum dolor sit amet ...' }
  ];

  addPosts( title: string, author: string, date: string, body: string ){
    this.allPosts.unshift({
      title, author, date, body
    });
  }
  
}
