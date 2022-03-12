import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'lib-team-list', templateUrl: './team-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TeamListComponent {
    params$ = this._activatedRoute.params;
    constructor(private _activatedRoute: ActivatedRoute) { }

}
