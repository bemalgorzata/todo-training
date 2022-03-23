import { DepartmentDTO } from "./department.dto";

export interface EmployeeDTO {
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly info: string;
  readonly buttonInfo: string;
  readonly department: DepartmentDTO;
}
