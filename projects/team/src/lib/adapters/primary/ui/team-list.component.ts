import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({
    selector: 'lib-team-list',
    templateUrl: './team-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListComponent {
    employees$: Observable<EmployeeDTO[]> = of([
        {
            name: "Andrzej",
            imageUrl: "https://scontent.fpoz3-1.fna.fbcdn.net/v/t1.6435-9/38026346_1754868611276419_1625273276152414208_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=HEHMrUj36dEAX9MvMrn&_nc_ht=scontent.fpoz3-1.fna&oh=00_AT8S-DEBV_ABjq9HxVsWdaJSfn8z4vX2yBWDvZiuez7gAg&oe=624ABB41",
            info: "Andrzej lubi zjeżdzać na nartach.",
            link: "/pracownik/Andrzej",
            button: "Poznaj Andrzeja",
            alt: "Andrzej"
        },
        {
            name: "Adam",
            imageUrl: "https://scontent.fpoz3-1.fna.fbcdn.net/v/t1.6435-9/161738566_287508819404472_9085678602602917289_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=l4N-xvpkXUsAX_Pz0cP&_nc_ht=scontent.fpoz3-1.fna&oh=00_AT83h42ImNBUFvsnlY2nTric3LnLCzbUYaYi0ycNrc7-0Q&oe=624D3119",
            info: "Adam lubi skakać na nartach.",
            link: "/pracownik/Adam",
            button: "Poznaj Adama",
            alt: "Adam"
        },
        {
            name: "Justyna",
            imageUrl: "https://scontent.fpoz3-1.fna.fbcdn.net/v/t1.18169-9/15181127_1663000840410932_2209517998189993037_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=cDTPsYC41uMAX9dWEO9&_nc_ht=scontent.fpoz3-1.fna&oh=00_AT_mwXPJyShBkqHf15VwqaloDqHsUW2d2uYqHJxZIAwsgg&oe=624CBE33",
            info: "Justyna lubi biegać na nartch.",
            link: "/pracownik/Justyna",
            button: "Poznaj Justynę",
            alt: "justyna"
        }
    ])
}
