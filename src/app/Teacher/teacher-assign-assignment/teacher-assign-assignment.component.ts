import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherServiceService } from '../../service/teacher-service.service';

@Component({
  selector: 'app-teacher-assign-assignment',
  templateUrl: './teacher-assign-assignment.component.html',
  styleUrl: './teacher-assign-assignment.component.css'
})
export class TeacherAssignAssignmentComponent {

  classroomId: number = 0;
  assignmentTitle: string = '';
  deadline: string = '';
  file: File | null = null;

  constructor(private teacherService: TeacherServiceService, private router: Router) {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    if (this.file) {
      this.teacherService.assignAssignment(this.file, this.classroomId, this.assignmentTitle, this.deadline)
        .subscribe(() => {
          console.log('Assignment assigned successfully');
          this.router.navigate(['/']); // Navigate to the desired route
        }, error => {
          console.error('Error assigning assignment', error);
        });
    }
  }
}
