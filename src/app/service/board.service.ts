import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from '../dataaccess/board';


@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private boardUrl = 'http://localhost:9090/api/boards';

  constructor(private http: HttpClient) { }

  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.boardUrl);
  }

  addBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(this.boardUrl, board);
  }

  getBoard(board_id: number): Observable<Board> {
    return this.http.get<Board>(`${this.boardUrl}/${board_id}`);
  }

  updateBoard(board_id: number, board: Board): Observable<Board> {
    return this.http.put<Board>(`${this.boardUrl}/${board_id}`, board);
  }

  deleteBoard(board_id: number): Observable<void> {
    return this.http.delete<void>(`${this.boardUrl}/${board_id}`);
  }
}
