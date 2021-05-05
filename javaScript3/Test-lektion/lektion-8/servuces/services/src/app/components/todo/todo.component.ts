import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo?: ITodo

  constructor() { }

  ngOnInit(): void {
  }
  toggleComplete(todo: ITodo) {
    todo.completed = !todo.completed
  }

  deleteTodo(todo: ITodo) {
    console.log(todo)
  }

}
