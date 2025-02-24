import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { Task } from '../../user/user.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() completed = new EventEmitter();
  private TasksService = inject(TasksService);

  selectComplete() {
    this.TasksService.removeTask(this.task.id);
  }
}
