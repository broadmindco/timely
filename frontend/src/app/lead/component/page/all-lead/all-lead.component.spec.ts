import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeadComponent } from './all-lead.component';

describe('AllLeadComponent', () => {
  let component: AllLeadComponent;
  let fixture: ComponentFixture<AllLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
