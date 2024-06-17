import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../../service/adminservice.service';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrl: './admin-student.component.css'
})
export class AdminStudentComponent {

  public isStudentListVisible: boolean=false; //Flag to control visibility
  constructor(private router:Router, private service:AdminserviceService){}

  loadStudentList(){
    this.isStudentListVisible=true;
    this.getAllStudents();
  }

  getAllStudents(){
    this.router.navigate(['admin-teacher/student-list']);
  }
  
}
