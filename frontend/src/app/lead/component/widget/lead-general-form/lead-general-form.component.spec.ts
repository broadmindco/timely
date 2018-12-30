import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadGeneralFormComponent } from './lead-general-form.component';

describe('LeadGeneralFormComponent', () => {
  let component: LeadGeneralFormComponent;
  let fixture: ComponentFixture<LeadGeneralFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadGeneralFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadGeneralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
