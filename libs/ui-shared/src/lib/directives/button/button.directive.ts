import { Directive, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
    selector: '[dCaveButton]',
})
export class ButtonDirective {
    constructor() {}

    @HostBinding() public get title() {
        return 'Cave Button';
    }
}

@NgModule({
    imports: [CommonModule],
    declarations: [ButtonDirective],
    exports: [ButtonDirective],
})
export class ButtonDirectiveModule {}
