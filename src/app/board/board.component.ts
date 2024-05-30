import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  tabelless: { name: string, editing: boolean }[] = [];

  addTabelles() {
    this.tabelless.push({ name: '', editing: true });
  }

  confirmBoardName(board: { name: string, editing: boolean }) {
    board.editing = false;
  }
}
