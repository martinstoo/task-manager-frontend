import { People } from "./people";
import { Tabelles } from "./tabelles";

export interface Task {
  task_id: number;
  title: string;
  assignee: People;
  assignedBy: People;
  assignedTo: People;
  description: string;
  tabelle: Tabelles;
}
