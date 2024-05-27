import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  @Input() tabelles_id!: number;
  tasks: any = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
      this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data.filter((tasks: any) => this.tasks.tabelles_id === this.tabelles_id);
    });
  }

  addTask() {
    const newTask = {description : "Do this", tabelles_id: this.tabelles_id};
    this.taskService.addTask(newTask).subscribe(() => {
      this.loadTasks();
    });
  }
}
