import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherExtendAssignmentDeadlineComponent } from './teacher-extend-assignment-deadline.component';

describe('TeacherExtendAssignmentDeadlineComponent', () => {
  let component: TeacherExtendAssignmentDeadlineComponent;
  let fixture: ComponentFixture<TeacherExtendAssignmentDeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherExtendAssignmentDeadlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherExtendAssignmentDeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
