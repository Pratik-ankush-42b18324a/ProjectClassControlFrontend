import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomsListComponent } from './classrooms-list.component';

describe('ClassroomsListComponent', () => {
  let component: ClassroomsListComponent;
  let fixture: ComponentFixture<ClassroomsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassroomsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassroomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
