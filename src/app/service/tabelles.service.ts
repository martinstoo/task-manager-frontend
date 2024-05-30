import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TabellesService {
  private tabellesUrl = 'http://localhost:9090/api/tabelless';

  constructor(private http: HttpClient) { }

  getTabelless(): Observable<any> {
    return this.http.get(`${this.tabellesUrl}`);
  }

  addTabelles(tabelles: any): Observable<any> {
    return this.http.post(`${this.tabellesUrl}`, tabelles);
  }
}