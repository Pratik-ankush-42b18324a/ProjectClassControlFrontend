import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherServiceService } from '../../service/teacher-service.service';

@Component({
  selector: 'app-teacher-extend-assignment-deadline',
  templateUrl: './teacher-extend-assignment-deadline.component.html',
  styleUrls: ['./teacher-extend-assignment-deadline.component.css'] // Use styleUrls with an array for multiple CSS files
})
export class TeacherExtendAssignmentDeadlineComponent implements OnInit {

  assignmentId!: number; // Declare as number and initialize in ngOnInit
  newDeadline!: string; // Declare as string and initialize in ngOnInit

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.assignmentId = +params.get('assignmentId')!; // Use + to convert string to number, ! to assert non-null
      this.newDeadline = ''; // Initialize newDeadline as an empty string or with a default value
    });
  }

  extendDeadline(): void {
    this.teacherService.extendAssignmentDeadline(this.assignmentId, this.newDeadline)
      .subscribe(response => {
        console.log(response); // Handle success response
        // Optionally, navigate to another route upon success
        this.router.navigate(['/']); // Example: navigate to home page
      }, error => {
        console.error(error); // Handle error
      });
  }
  
}
