
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabelles',
  templateUrl: './tabelles.component.html',
  styleUrls: ['./tabelles.component.css']
})
export class TabellesComponent {
  @Input() boardName: string;
  tabelless: { name: string }[] = [];

  constructor() {
    this.boardName = '';
  }

  addTabelles() {
    this.tabelless.push({ name: '' });
  }
}
