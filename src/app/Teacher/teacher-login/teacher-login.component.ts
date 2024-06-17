import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherServiceService } from '../../service/teacher-service.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private teacherService: TeacherServiceService, private router: Router) {}

  login(): void {
    this.teacherService.teacherLogin(this.username, this.password).subscribe(
      (success) => {
        if (success) {
          localStorage.setItem('loggedInTeacherUsername', this.username);
          this.router.navigate(['/teacher-sidebar']);
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
