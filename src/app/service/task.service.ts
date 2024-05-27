import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskUrl = 'http://localhost:9090/api/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get(`${this.taskUrl}`);
  }

  addTask(task: Object): Observable<Object> {
    return this.http.post(`${this.taskUrl}`, task);
  }
}
