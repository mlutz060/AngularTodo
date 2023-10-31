import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Item } from "../item"

@Component({
  selector: 'Todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  title = 'todo';

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description:  "wake up", done: true },
    { description:  "eat breakfast", done: true },
    { description:  "go to work", done: true },
    { description:  "eat lunch", done: false },
    { description:  "go home", done: false }
  ];

  get items(){
    if(this.filter === "all"){
      return this.allItems;
    }
    return this.allItems.filter((item) =>
    this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string){
    this.allItems.unshift({
      description,
      done: false
    });
  }
  remove(item: Item){
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
