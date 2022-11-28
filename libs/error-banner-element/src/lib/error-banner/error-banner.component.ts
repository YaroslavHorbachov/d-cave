import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'd-cave-error-banner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './error-banner.component.html',
    styleUrls: ['./error-banner.component.css'],
})
export class ErrorBannerElementComponent {
    @Input() public readonly text: string = '';
}
