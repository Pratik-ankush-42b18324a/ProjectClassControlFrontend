import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Material } from '../../models/Material';
import { TeacherServiceService } from '../../service/teacher-service.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  materials: Material[] = [];
  classroomId!: number; // Use non-null assertion operator

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherServiceService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const classroomIdParam = params.get('classroomId');
      if (classroomIdParam !== null) {
        this.classroomId = +classroomIdParam;
        this.loadMaterials();
      } else {
        console.error('ClassroomId parameter is null or undefined.');
        // Handle the absence of classroomId parameter as needed
      }
    });
  }

  loadMaterials(): void {
    this.teacherService.getMaterialsForClassroom(this.classroomId)
      .subscribe(
        materials => {
          this.materials = materials;
          console.log('Materials fetched:', this.materials); // Log materials to verify
        },
        error => {
          console.error('Error fetching materials:', error);
          // Handle error gracefully
        }
      );
  }
  
}
