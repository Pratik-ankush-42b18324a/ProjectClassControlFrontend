import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classroom } from '../models/Classroom';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8091';

  constructor(private http: HttpClient) { }

  studentLogin(username: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/studentLogin/${username}/${password}`, null);
  }

  getStudentByUsername(username: string): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/students/username/${username}`);
  }

  getClassroomsByStudentId(studentId: number): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(`${this.baseUrl}/${studentId}/studentGetClassrooms`);
  }

  downloadMaterial(classroomId: number, materialId: number): Observable<HttpResponse<Blob>> {
    return this.http.get(`${this.baseUrl}/classrooms/${classroomId}/material/${materialId}/studentdownload`, { observe: 'response', responseType: 'blob' });
  }

  downloadAssignedAssignment(assignmentId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${assignmentId}/studentDownloadAssignedAssignment`, { responseType: 'blob' });
  }

  uploadCompletedAssignment(file: File, assignmentId: number): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<string>(`${this.baseUrl}/${assignmentId}/studentSubmitAssignment`, formData);
  }

  deleteSubmittedAssignment(submissionId: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/studentDeleteSubmittedAssignment/${submissionId}`);
  }
}
