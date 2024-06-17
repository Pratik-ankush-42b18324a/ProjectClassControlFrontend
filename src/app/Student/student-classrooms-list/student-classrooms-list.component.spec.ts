import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentClassroomsListComponent } from './student-classrooms-list.component';

describe('StudentClassroomsListComponent', () => {
  let component: StudentClassroomsListComponent;
  let fixture: ComponentFixture<StudentClassroomsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentClassroomsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentClassroomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
