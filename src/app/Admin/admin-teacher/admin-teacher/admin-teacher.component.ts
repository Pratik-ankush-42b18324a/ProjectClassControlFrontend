import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../../../service/adminservice.service';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrl: './admin-teacher.component.css'
})
export class AdminTeacherComponent {
  public isTeacherListVisible: boolean = false; // Flag to control visibility
  constructor(private router:Router, private service:AdminserviceService){}
  
  loadTeacherList() {
    this.isTeacherListVisible = true;
    this.getAllTeachers();
  }

  getAllTeachers(){
    this.router.navigate(['admin-teacher/teacher-list']);
  }

  

}
