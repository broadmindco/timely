import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSocialFormComponent } from './lead-social-form.component';

describe('LeadSocialFormComponent', () => {
  let component: LeadSocialFormComponent;
  let fixture: ComponentFixture<LeadSocialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadSocialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadSocialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
