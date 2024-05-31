import { Board } from "./board";

export interface Tabelles {
  tabelle_id: number;
  title: string;
  taskLimit: number;
  board: Board;
}
