import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  editable = false;

    @Input() post!: Post;
    @Output() remove = new EventEmitter<Post>();


  savePost(title: string, author: string, date: string, body: string){
    if(!title || !author || !date || !body) return;
    this.editable = false;
    this.post.title = title;
    this.post.author = author;
    this.post.date = date;
    this.post.body = body;
  }

}
