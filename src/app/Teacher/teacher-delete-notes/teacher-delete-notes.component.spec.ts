import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDeleteNotesComponent } from './teacher-delete-notes.component';

describe('TeacherDeleteNotesComponent', () => {
  let component: TeacherDeleteNotesComponent;
  let fixture: ComponentFixture<TeacherDeleteNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherDeleteNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherDeleteNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
