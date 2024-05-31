import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tabelles } from '../dataaccess/tabelles';

@Injectable({
  providedIn: 'root'
})
export class TabellesService {
  private tabellesUrl = 'http://localhost:9090/api/tabelles';

  constructor(private http: HttpClient) { }

  getTabelles(): Observable<Tabelles[]> {
    return this.http.get<Tabelles[]>(this.tabellesUrl);
  }

  addTabelles(tabelles: Tabelles): Observable<Tabelles> {
    return this.http.post<Tabelles>(this.tabellesUrl, tabelles);
  }

  getTabelle(tabelle_id: number): Observable<Tabelles> {
    return this.http.get<Tabelles>(`${this.tabellesUrl}/${tabelle_id}`);
  }

  updateTabelle(tabelle_id: number, tabelles: Tabelles): Observable<Tabelles> {
    return this.http.put<Tabelles>(`${this.tabellesUrl}/${tabelle_id}`, tabelles);
  }

  deleteTabelle(tabelle_id: number): Observable<void> {
    return this.http.delete<void>(`${this.tabellesUrl}/${tabelle_id}`);
  }
}
