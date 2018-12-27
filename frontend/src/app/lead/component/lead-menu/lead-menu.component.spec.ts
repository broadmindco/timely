import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadMenuComponent } from './lead-menu.component';

describe('LeadMenuComponent', () => {
  let component: LeadMenuComponent;
  let fixture: ComponentFixture<LeadMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
