import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBannerElementComponent } from './error-banner.component';

describe('ErrorBannerElementComponent', () => {
    let component: ErrorBannerElementComponent;
    let fixture: ComponentFixture<ErrorBannerElementComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ErrorBannerElementComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ErrorBannerElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
