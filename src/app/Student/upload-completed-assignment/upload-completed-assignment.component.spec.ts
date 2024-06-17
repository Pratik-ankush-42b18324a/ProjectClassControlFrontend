import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCompletedAssignmentComponent } from './upload-completed-assignment.component';

describe('UploadCompletedAssignmentComponent', () => {
  let component: UploadCompletedAssignmentComponent;
  let fixture: ComponentFixture<UploadCompletedAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadCompletedAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadCompletedAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
