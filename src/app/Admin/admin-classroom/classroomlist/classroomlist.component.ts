import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../../../service/adminservice.service';
import { Classroom } from '../../../models/Classroom';
import { Observable, of } from 'rxjs';
import { ClassroomCreateRequest } from '../../../models/ClassroomCreateRequest';
import { ClassroomDTO } from '../../../models/ClassroomDTO';


@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent implements OnInit {

  public classrooms: Observable<ClassroomDTO[]> = of([]);

  constructor(private service: AdminserviceService, private router : Router) { }

  ngOnInit(): void {
    this.loadClassrooms();
  }

  loadClassrooms(): void {
    this.service.getAllClassrooms().subscribe({
      next: (data: ClassroomDTO[]) => {
        this.classrooms = of(data);
      },
      error: (error) => {
        console.error('Error loading classrooms', error);
      }
    });

  }


  updateClassroom(classroomId:number){
  
    this.router.navigate(['admin-classroom/update-classroom/:classroomId']);
  }

  deleteClassroom(classroomId: number): void {
    this.service.deleteClassroom(classroomId).subscribe(() => {
      console.log('Classroom deleted successfully');
      this.loadClassrooms();
    });
  }
  }