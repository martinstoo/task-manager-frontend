import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabelles',
  templateUrl: './tabelles.component.html',
  styleUrls: ['./tabelles.component.css']
})
export class TabellesComponent {
  @Input() boardName: string;

  constructor() {
    this.boardName = '';
  }
  
  addTable() {
    console.log('Add Table to Board:', this.boardName);
  }
}
