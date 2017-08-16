import { Class } from "./class"
import { Grade } from "./grade"

export class Student {
  id: number;
  first_name: string;
  last_name: string;
  classes: Class[];
  grades: Grade[];
}
