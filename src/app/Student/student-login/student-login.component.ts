import { Component } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private studentService: StudentService , private router: Router) {}

  login(): void {
    this.studentService.studentLogin(this.username, this.password).subscribe(
      (success) => {
        if (success) {
          localStorage.setItem('loggedInStudentUsername', this.username);
          this.router.navigate(['/student-sidebar']);
        } else {
          this.loginError = 'Invalid username or password.';
        }
      },
      (error) => {
        this.loginError = 'An error occurred during login. Please try again.';
      }
    );
  }

}
