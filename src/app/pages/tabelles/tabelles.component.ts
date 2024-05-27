import { Component, Input, OnInit } from '@angular/core';
import { TabellesService } from '../../service/tabelles.service';

@Component({
  selector: 'app-tabelles',
  templateUrl: './tabelles.component.html',
  styleUrl: './tabelles.component.css'
})
export class TabellesComponent implements OnInit{
  @Input() board_id!: number;
  tabelless: any = [];

  constructor(private tabellesService: TabellesService) {
  }

  ngOnInit(): void {
      this.loadTabelles();
  }

  loadTabelles() {
    this.tabellesService.getTabelles().subscribe(data => {
      this.tabelless = data.filter((tabelles: any) => this.tabelless.board_id === this.board_id);
    });
  }

  addTabelles() {
    const newTabelles = {name: "New Tabelles", board_id: this.board_id};
    this.tabellesService.addTabelles(newTabelles).subscribe(() => {
      this.loadTabelles();
    });
  }
}

