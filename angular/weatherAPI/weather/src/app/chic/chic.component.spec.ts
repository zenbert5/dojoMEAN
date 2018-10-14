import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChicComponent } from './chic.component';

describe('ChicComponent', () => {
  let component: ChicComponent;
  let fixture: ComponentFixture<ChicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
