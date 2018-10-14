import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurComponent } from './bur.component';

describe('BurComponent', () => {
  let component: BurComponent;
  let fixture: ComponentFixture<BurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
