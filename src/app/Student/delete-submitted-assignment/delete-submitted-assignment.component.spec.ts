import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubmittedAssignmentComponent } from './delete-submitted-assignment.component';

describe('DeleteSubmittedAssignmentComponent', () => {
  let component: DeleteSubmittedAssignmentComponent;
  let fixture: ComponentFixture<DeleteSubmittedAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteSubmittedAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteSubmittedAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
