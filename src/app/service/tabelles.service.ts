import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TabellesService {
  private tabellesUrl = 'http://localhost:9090/api/tabelles';

  constructor(private http: HttpClient) { }

  getTabelles(): Observable<any> {
    return this.http.get(`${this.tabellesUrl}`);
  }

  addTabelles(tabelles: Object): Observable<Object> {
    return this.http.post(`${this.tabellesUrl}`, tabelles);
  }
}
