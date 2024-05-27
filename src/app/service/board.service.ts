import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardUrl = 'http://localhost:9090/api/boards';

  constructor(private http: HttpClient) { }

  getBoards(): Observable<any> {
    return this.http.get(`${this.boardUrl}`);
  }

  addBoard(board: Object): Observable<Object> {
    return this.http.post(`${this.boardUrl}`, board);
  }
}