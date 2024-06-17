import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';
import { ClassroomCreateRequest } from '../models/ClassroomCreateRequest';
import { Classroom } from '../models/Classroom';
import { ClassroomUpdateRequest } from '../models/ClassroomUpdateRequest';
import { Teacher } from '../models/Teacher';
import { ClassroomDTO } from '../models/ClassroomDTO';
import { Student } from '../models/Student';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
 

  baseUrl = "http://localhost:8091";
  getCourseById: any;
  constructor(private http: HttpClient) { }

  //---------------admin managing courses--------------------------------------------------------

  createCourse(course: Object): Observable<Object> {
    console.log('create admin service');
    return this.http.post(`${this.baseUrl}/course/create`, course);
  }


  getAllCourse(): any {
    console.log("inside service");
    return this.http.get(`${this.baseUrl}/getAllCourses`);
  }

  /*
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/course/${id}`);
  }
  */

  updateCourse(course: Course): Observable<Object> {
    console.log("inside admin course update");
    return this.http.put(`${this.baseUrl}/course/update`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/course/delete/${id}`, { responseType: 'text' });
  }

  //---------------admin managing classrooms--------------------------------------------------------

  createClassroom(request: ClassroomCreateRequest): Observable<Classroom> {
    console.log("inside create classroom");
    return this.http.post<Classroom>(`${this.baseUrl}/admin/classroom/create`, request);
  }

  getAllClassrooms(): Observable<ClassroomDTO[]> {
    return this.http.get<ClassroomDTO[]>(`${this.baseUrl}/getAllClassrooms`);
  }
 
  deleteClassroom(classroomId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/classroom/delete/${classroomId}`);
  }

  updateClassroom(classroomUpdateRequest: ClassroomUpdateRequest): Observable<Classroom> {
    console.log("inside admin classroom update");
    
    return this.http.put<Classroom>(`${this.baseUrl}/classroom/update`, classroomUpdateRequest);
  }
  //---------------admin managing teachers--------------------------------------------------------

  getAllTeachers(): Observable<Teacher[]>{
    console.log("inside admin-teacher list");
    return this.http.get<Teacher[]>(`${this.baseUrl}/admin/getAllTeachers`);
  }

  generatePasswordForTeacher(teacherId: number): Observable<string> {
    const url = `${this.baseUrl}/generatePasswordForTeacher/${teacherId}`;
    return this.http.post<string>(url, null, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

 
  addTeacherToCourse(teacherId: number, courseId: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/admin/addTeacherToCourse`, { teacherId, courseId });
  }

  sendTeacherCredentials(teacherId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/sendTeacherCredentials/${teacherId}`, {});
  }


  //--------------admin managing students---------------------------------------------------------------------------------------------

  getAllStudents():Observable<Student[]>{
    console.log("inside admin-student list");
    return this.http.get<Student[]>(`${this.baseUrl}/admin/getAllStudents`);
  }

  generatePasswordForStudent(studentId: number): Observable<string> {
    const url = `${this.baseUrl}/generatePasswordForStudent/${studentId}`;
    return this.http.post<string>(url, null, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  addStudentToCourse(studentId: number, courseId: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/admin/addStudentToCourse`, { studentId, courseId });
  }

  sendStudentCredentials(studentId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/sendTeacherCredentials/${studentId}`, {});
  }




}