import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMaterialsListComponent } from './student-materials-list.component';

describe('StudentMaterialsListComponent', () => {
  let component: StudentMaterialsListComponent;
  let fixture: ComponentFixture<StudentMaterialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentMaterialsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentMaterialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
