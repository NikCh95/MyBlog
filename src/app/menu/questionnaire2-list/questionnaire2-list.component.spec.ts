import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionnaire2ListComponent } from './questionnaire2-list.component';

describe('Questionnaire2ListComponent', () => {
  let component: Questionnaire2ListComponent;
  let fixture: ComponentFixture<Questionnaire2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Questionnaire2ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Questionnaire2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
