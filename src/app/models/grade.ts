import { Class } from "./class";
import { Assignment } from "./assignment";

export interface Grade {
  id: number;
  assignment: Assignment;
  grade: number;
  notes: string;
}
