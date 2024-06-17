import { Component } from '@angular/core';
import { TeacherServiceService } from '../../service/teacher-service.service';
import { Material, MaterialType } from '../../models/Material';

@Component({
  selector: 'app-teacher-upload-notes',
  templateUrl: './teacher-upload-notes.component.html',
  styleUrls: ['./teacher-upload-notes.component.css']
})
export class TeacherUploadNotesComponent {

  selectedFile!: File;
  classroomId!: number;
  material: Material;

  constructor(private teacherService: TeacherServiceService) {
    this.material = new Material(MaterialType.NOTES);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  teacherUploadNotes(): void {
    this.material.material_File = this.selectedFile;
    this.teacherService.uploadMaterial(this.selectedFile, this.classroomId).subscribe(response => {
      alert(response);
    }, error => {
      alert(error.error);
    });
  }

}
