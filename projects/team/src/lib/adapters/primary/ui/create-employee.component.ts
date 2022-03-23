import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_EMPLOYEE_DTO, AddsEmployeeDtoPort } from '../../../application/ports/secondary/adds-employee.dto-port';

@Component({
  selector: 'lib-create-employee',
  templateUrl: './create-employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEmployeeComponent {
  readonly createEmployee: FormGroup = new FormGroup(
    {
      name: new FormControl(),
      info: new FormControl(),
      imageUrl: new FormControl(),
      id: new FormControl(),
      department: new FormControl(),
    });

  constructor(@Inject(ADDS_EMPLOYEE_DTO) private _addsEmployeeDto: AddsEmployeeDtoPort) {
  }

  onCreateEmployeeSubmited(createEmployee: FormGroup): void {
    if (createEmployee.invalid) {
      return;
    }
    this._addsEmployeeDto.add(createEmployee.getRawValue());
    this.createEmployee.reset();

  }
}

