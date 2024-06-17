import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/Teacher';
import { Classroom } from '../models/Classroom';
import { Material } from '../models/Material';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {
  private baseUrl = 'http://localhost:8091'; 

  constructor(private http: HttpClient) { }

  teacherLogin(username: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/teacherLogin/${username}/${password}`, null);
  }

  getTeacherByUsername(username: string): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.baseUrl}/teachers/username/${username}`);
  }

  getClassroomsByTeacherId(teacherId: number): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(`${this.baseUrl}/teachers/${teacherId}/classrooms`);
  }

  uploadMaterial(file: File, classroomId: number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('classroom_Id', classroomId.toString());

    return this.http.post(`${this.baseUrl}/teacher/uploadNotes`, formData, {
      responseType: 'text'
    });
  }

  deleteMaterial(materialId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/teacher/deleteUploadedNotes/${materialId}`, {
      responseType: 'text'
    });
  }

  assignAssignment(file: File, classroomId: number, assignmentTitle: string, deadline: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('assignmentTitle', assignmentTitle);
    formData.append('deadline', deadline);

    return this.http.post(`${this.baseUrl}/classrooms/${classroomId}/teacherAssignAssignment`, formData, {
      responseType: 'text'
    });
  }

  extendAssignmentDeadline(assignmentId: number, newDeadline: string): Observable<any> {
    const params = {
      newDeadline: newDeadline
    };

    return this.http.put(`${this.baseUrl}/teacherExtendAssignmentDeadline/${assignmentId}`, null, { 
      params: params,
      responseType: 'text' 
    });
  }

  getMaterialsByClassroomId(classroomId: number): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.baseUrl}/classrooms/${classroomId}/materials`);
  }

  // Callback mapping method for getMaterialsByClassroomId
  getMaterialsForClassroom(classroomId: number): Observable<Material[]> {
    return this.getMaterialsByClassroomId(classroomId);
  }
}
