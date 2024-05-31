import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../dataaccess/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskUrl = 'http://localhost:9090/api/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.taskUrl, task);
  }

  getTask(task_id: number): Observable<Task> {
    return this.http.get<Task>(`${this.taskUrl}/${task_id}`);
  }

  updateTask(task_id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.taskUrl}/${task_id}`, task);
  }

  deleteTask(task_id: number): Observable<void> {
    return this.http.delete<void>(`${this.taskUrl}/${task_id}`);
  }
}
