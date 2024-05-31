import { People } from "./people";


export interface Board {
  board_id: number;
  title: string;
  description: string;
  people: People[];
}
