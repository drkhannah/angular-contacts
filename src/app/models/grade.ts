import { Class } from "./class"
import { Assignment } from "./assignment"

export class Grade {
  id: number;
  assignment: Assignment;
  grade: number;
  notes: string;
}
