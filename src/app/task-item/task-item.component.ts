import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: Task;
  @Output() selectTask = new EventEmitter<Task>();
  @Output() perfomTask = new EventEmitter<Task>();

 executeAtion(action: string): void {
  this[action].emit(this.task);
  }

}

