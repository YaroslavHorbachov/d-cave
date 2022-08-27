import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'd-cave-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
