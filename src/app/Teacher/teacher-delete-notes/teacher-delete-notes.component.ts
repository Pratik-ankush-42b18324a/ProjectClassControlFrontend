import { Component } from '@angular/core';
import { TeacherServiceService } from '../../service/teacher-service.service';

@Component({
  selector: 'app-teacher-delete-notes',
  templateUrl: './teacher-delete-notes.component.html',
  styleUrl: './teacher-delete-notes.component.css'
})
export class TeacherDeleteNotesComponent {

  materialId!: number;

  constructor(private teacherService: TeacherServiceService) {}

  deleteNotes() {
    this.teacherService.deleteMaterial(this.materialId).subscribe(response => {
      alert(response);
    }, error => {
      alert(error.error);
    });
  }

}
