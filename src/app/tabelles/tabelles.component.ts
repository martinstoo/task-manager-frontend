import { Component } from '@angular/core';

@Component({
  selector: 'app-tabelles',
  templateUrl: './tabelles.component.html',
  styleUrls: ['./tabelles.component.css']
})
export class TabellesComponent {
  tabellesName: string = '';
  tasks: number[] = [];

  addTask() {
    this.tasks.push(this.tasks.length);
  }
}
