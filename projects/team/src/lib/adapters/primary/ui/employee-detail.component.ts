import { ActivatedRoute } from '@angular/router';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { GETS_ONE_EMPLOYEE_DTO, GetsOneEmployeeDtoPort } from '../../../application/ports/secondary/gets-one-employee.dto-port';

@Component({
    selector: 'lib-employee-detail',
    templateUrl: './employee-detail.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent {
    params$ = this._activatedRoute.params
    employee$: Observable<EmployeeDTO> = this._getsOneEmployeeDto.getOne('XSNRXCrPigcte0DVghxX');

    constructor(
        private _activatedRoute: ActivatedRoute,
        @Inject(GETS_ONE_EMPLOYEE_DTO) private _getsOneEmployeeDto: GetsOneEmployeeDtoPort) { }
}
