import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { GETS_ALL_EMPLOYEE_DTO, GetsAllEmployeeDtoPort } from '../../../application/ports/secondary/gets-all-employee.dto-port';

@Component({ selector: 'lib-test', templateUrl: './test.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TestComponent {
  teamList$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll();

  constructor(@Inject(GETS_ALL_EMPLOYEE_DTO) private _getsAllEmployeeDto: GetsAllEmployeeDtoPort) {
  }
}
