import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { FooterComponent } from './Home/footer/footer.component';
import { ContactComponent } from './Home/contact/contact.component';
import { AboutComponent } from './Home/about/about.component';
import { HeaderComponent } from './Home/header/header.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminCourseComponent } from './Admin/admin-course/admin-course.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CreatecourseComponent } from './Admin/admin-course/createcourse/createcourse.component';
import { CourseListComponent } from './Admin/admin-course/course-list/course-list.component';
import { UpdateCourseComponent } from './Admin/admin-course/updateCourse/update-course/update-course.component';
import { AdminSiderbarComponent } from './Admin/admin-siderbar/admin-siderbar.component';
import { ClassroomlistComponent } from './Admin/admin-classroom/classroomlist/classroomlist.component';
import { CreateClassroomComponent } from './Admin/admin-classroom/create-classroom/create-classroom.component';

import { UpdateClassroomComponent } from './Admin/admin-classroom/admin-classroom/update-classroom/update-classroom.component';
import { AdminClassroomComponent } from './Admin/admin-classroom/admin-classroom/admin-classroom.component';
import { AdminTeacherComponent } from './Admin/admin-teacher/admin-teacher/admin-teacher.component';
import { TeacherListComponent } from './Admin/admin-teacher/teacher-list/teacher-list.component';
import { AdminStudentComponent } from './Admin/admin-student/admin-student.component';
import { StudentListComponent } from './Admin/student-list/student-list.component';
import { TeacherSidebarComponent } from './Teacher/teacher-sidebar/teacher-sidebar.component';
import { TeacherLoginComponent } from './Teacher/teacher-login/teacher-login.component';
import { ClassroomsListComponent } from './Teacher/classrooms-list/classrooms-list.component';
import { TeacherStreamComponent } from './Teacher/teacher-stream/teacher-stream.component';
import { TeacherUploadNotesComponent } from './Teacher/teacher-upload-notes/teacher-upload-notes.component';
import { TeacherDeleteNotesComponent } from './Teacher/teacher-delete-notes/teacher-delete-notes.component';
import { TeacherAssignAssignmentComponent } from './Teacher/teacher-assign-assignment/teacher-assign-assignment.component';
import { NotesListComponent } from './Teacher/notes-list/notes-list.component';
import { AssignmentsListComponent } from './Teacher/assignments-list/assignments-list.component';
import { TeacherExtendAssignmentDeadlineComponent } from './Teacher/teacher-extend-assignment-deadline/teacher-extend-assignment-deadline.component';
import { StudentClassroomsListComponent } from './Student/student-classrooms-list/student-classrooms-list.component';
import { StudentLoginComponent } from './Student/student-login/student-login.component';
import { StudentSidebarComponent } from './Student/student-sidebar/student-sidebar.component';
import { DownloadNotesComponent } from './Student/download-notes/download-notes.component';
import { DownloadAssignedAssignmentComponent } from './Student/download-assigned-assignment/download-assigned-assignment.component';
import { StudentStreamComponent } from './Student/student-stream/student-stream.component';
import { StudentSubmitAssignmentComponent } from './Student/student-submit-assignment/student-submit-assignment.component';
import { StudentMaterialsListComponent } from './Student/student-materials-list/student-materials-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminCourseComponent,
    CreatecourseComponent,
    CourseListComponent,
    UpdateCourseComponent,
    AdminSiderbarComponent,
    ClassroomlistComponent,
    CreateClassroomComponent,
    AdminClassroomComponent,
    UpdateClassroomComponent,
    AdminTeacherComponent,
    TeacherListComponent,
    AdminStudentComponent,
    StudentListComponent,
    TeacherSidebarComponent,
    TeacherLoginComponent,
    ClassroomsListComponent,
    TeacherStreamComponent,
    TeacherUploadNotesComponent,
    TeacherDeleteNotesComponent,
    TeacherAssignAssignmentComponent,
    NotesListComponent,
    AssignmentsListComponent,
    TeacherExtendAssignmentDeadlineComponent,
    StudentClassroomsListComponent,
    StudentLoginComponent,
    StudentSidebarComponent,
    DownloadNotesComponent,
    DownloadAssignedAssignmentComponent,
    StudentStreamComponent,
    StudentSubmitAssignmentComponent,
    StudentMaterialsListComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
