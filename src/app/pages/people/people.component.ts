import { Component, OnInit } from '@angular/core';
import { People } from '../../dataaccess/people';
import { PeopleService } from '../../service/people.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peopleList: People[] = [];
  newPerson: People = { people_id: 0, username: '', firstName: '', lastName: '', age: 0 };

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.peopleService.getPeople().subscribe(people => this.peopleList = people);
  }

  addPerson(): void {
    this.peopleService.addPerson(this.newPerson).subscribe(person => {
      this.peopleList.push(person);
      this.newPerson = { people_id: 0, username: '', firstName: '', lastName: '', age: 0 };
    });
  }
}
