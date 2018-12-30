import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadAddressFormComponent } from './lead-address-form.component';

describe('LeadAddressFormComponent', () => {
  let component: LeadAddressFormComponent;
  let fixture: ComponentFixture<LeadAddressFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadAddressFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
