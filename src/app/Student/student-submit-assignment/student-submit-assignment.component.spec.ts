import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubmitAssignmentComponent } from './student-submit-assignment.component';

describe('StudentSubmitAssignmentComponent', () => {
  let component: StudentSubmitAssignmentComponent;
  let fixture: ComponentFixture<StudentSubmitAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentSubmitAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentSubmitAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
