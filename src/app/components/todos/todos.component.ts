import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/ITodo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  todo: ITodo[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.todo = [
      {
        content: 'first todo',
        completed: false
      },
      {
        content: 'second todo',
        completed: true
      }
    ]
  }

}
