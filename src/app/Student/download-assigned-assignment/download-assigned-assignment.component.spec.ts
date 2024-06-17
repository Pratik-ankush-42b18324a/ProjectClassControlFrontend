import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAssignedAssignmentComponent } from './download-assigned-assignment.component';

describe('DownloadAssignedAssignmentComponent', () => {
  let component: DownloadAssignedAssignmentComponent;
  let fixture: ComponentFixture<DownloadAssignedAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadAssignedAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadAssignedAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
