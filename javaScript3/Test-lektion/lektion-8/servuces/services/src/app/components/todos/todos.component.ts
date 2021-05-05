import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/itodo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ITodo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      { id: 1, title: 'Todo One', completed: false},
        { id: 2, title: 'Todo Two', completed: true},
       { id: 3, title: 'Todo Three', completed: false}
    ]
  }

}
