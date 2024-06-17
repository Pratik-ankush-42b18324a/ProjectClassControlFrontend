import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadNotesComponent } from './download-notes.component';

describe('DownloadNotesComponent', () => {
  let component: DownloadNotesComponent;
  let fixture: ComponentFixture<DownloadNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
