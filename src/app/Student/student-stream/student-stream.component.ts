import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-stream',
  templateUrl: './student-stream.component.html',
  styleUrl: './student-stream.component.css'
})
export class StudentStreamComponent {

  constructor(private router: Router) {}

  downloadNotes(){
    this.router.navigate(['download-notes']);
  }

  submitAssignment(){
    this.router.navigate(['submit-assignment']);
  }

  downloadAssignedAssignment(){
    this.router.navigate(['download-assigned-assignment']);
  }

  deleteSubmittedAssignment(){
    this.router.navigate(['delete-submitted-assignment']);
  }

  getMaterialsList(){
    this.router.navigate(['student-get-materials-list']);
  }
  
}
