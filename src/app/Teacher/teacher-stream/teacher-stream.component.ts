import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-stream',
  templateUrl: './teacher-stream.component.html',
  styleUrl: './teacher-stream.component.css'
})
export class TeacherStreamComponent {

  showUploadNotesForm= false;


  constructor(private router: Router) {}

  uploadNotes(){
    this.showUploadNotesForm=true;
    this.router.navigate(['teacher-upload-notes']);
  
  }

  deleteNotes(){
    this.router.navigate(['teacher-delete-notes']);
  }

  assignAssignment(){
    this.router.navigate(['teacher-assign-assignment']);
  }

  extendAssignmentDeadline()
  {
    this.router.navigate(['teacher-extend-assignment-deadline']);
  }

  getMaterialsList(){
    this.router.navigate(['teacher-get-materials-list']);
  }
}
