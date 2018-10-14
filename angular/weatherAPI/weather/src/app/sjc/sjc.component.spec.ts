import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjcComponent } from './sjc.component';

describe('SjcComponent', () => {
    let component: SjcComponent;
    let fixture: ComponentFixture<SjcComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SjcComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SjcComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
