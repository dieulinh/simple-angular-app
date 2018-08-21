import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList = null;

  constructor(private rest: RestApiService) {
    this.getPeopleList();
  }

  ngOnInit() {
  }
  async getPeopleList() {
    try {
      const data = await this.rest.get('http://dev.api.fooddocs.ee/testtask');
      this.peopleList = data;
    } catch (err) {
      console.log(err);
    }
  }
  removePerson(person) {
    this.peopleList = this.peopleList.filter(currentPerson => {
      return currentPerson.id !== person.id;
    });
  }
}
