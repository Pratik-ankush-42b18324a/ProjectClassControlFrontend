import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAssignAssignmentComponent } from './teacher-assign-assignment.component';

describe('TeacherAssignAssignmentComponent', () => {
  let component: TeacherAssignAssignmentComponent;
  let fixture: ComponentFixture<TeacherAssignAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherAssignAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherAssignAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
