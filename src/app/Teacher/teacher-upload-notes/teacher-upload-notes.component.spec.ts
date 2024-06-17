import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherUploadNotesComponent } from './teacher-upload-notes.component';

describe('TeacherUploadNotesComponent', () => {
  let component: TeacherUploadNotesComponent;
  let fixture: ComponentFixture<TeacherUploadNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherUploadNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherUploadNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
