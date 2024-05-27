import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../service/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit{
  boards: any = [];


  constructor(private boardService: BoardService) {
  }

  ngOnInit(): void {
      this.loadBoards();
  }

  loadBoards() {
    this.boardService.getBoards().subscribe(data => {
      this.boards = data;
    });
  }

  addBoard() {
    const newBoard = {name: "New Board"};
    this.boardService.addBoard(newBoard).subscribe(() => {
      this.loadBoards();
    });
  }
}
