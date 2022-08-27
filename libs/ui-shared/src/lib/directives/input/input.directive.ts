import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
    selector: '[dCaveInput]',
})
export class InputDirective {
    constructor() {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [InputDirective],
    exports: [InputDirective],
})
export class InputDirectiveModule {}
