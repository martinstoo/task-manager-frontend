import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '../dataaccess/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private peopleUrl = 'http://localhost:9090/api/people';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.peopleUrl);
  }

  addPerson(person: People): Observable<People> {
    return this.http.post<People>(this.peopleUrl, person);
  }

  getPerson(person_id: number): Observable<People> {
    return this.http.get<People>(`${this.peopleUrl}/${person_id}`);
  }

  updatePerson(person_id: number, person: People): Observable<People> {
    return this.http.put<People>(`${this.peopleUrl}/${person_id}`, person);
  }

  deletePerson(person_id: number): Observable<void> {
    return this.http.delete<void>(`${this.peopleUrl}/${person_id}`);
  }
}
