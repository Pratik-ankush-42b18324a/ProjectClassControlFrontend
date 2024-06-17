
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { AboutComponent } from './Home/about/about.component';
import { ContactComponent } from './Home/contact/contact.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminCourseComponent } from './Admin/admin-course/admin-course.component';
import { CreatecourseComponent } from './Admin/admin-course/createcourse/createcourse.component';
import { CourseListComponent } from './Admin/admin-course/course-list/course-list.component';
import { UpdateCourseComponent } from './Admin/admin-course/updateCourse/update-course/update-course.component';
import { CreateClassroomComponent } from './Admin/admin-classroom/create-classroom/create-classroom.component';
import { UpdateClassroomComponent } from './Admin/admin-classroom/admin-classroom/update-classroom/update-classroom.component';
import { ClassroomlistComponent } from './Admin/admin-classroom/classroomlist/classroomlist.component';
import { AdminClassroomComponent } from './Admin/admin-classroom/admin-classroom/admin-classroom.component';
import { AdminTeacherComponent } from './Admin/admin-teacher/admin-teacher/admin-teacher.component';
import { TeacherListComponent } from './Admin/admin-teacher/teacher-list/teacher-list.component';
import { AdminStudentComponent } from './Admin/admin-student/admin-student.component';
import { StudentListComponent } from './Admin/student-list/student-list.component';
import { TeacherLoginComponent } from './Teacher/teacher-login/teacher-login.component';
import { TeacherSidebarComponent } from './Teacher/teacher-sidebar/teacher-sidebar.component';
import { ClassroomsListComponent } from './Teacher/classrooms-list/classrooms-list.component';
import { TeacherStreamComponent } from './Teacher/teacher-stream/teacher-stream.component';
import { TeacherUploadNotesComponent } from './Teacher/teacher-upload-notes/teacher-upload-notes.component';
import { TeacherDeleteNotesComponent } from './Teacher/teacher-delete-notes/teacher-delete-notes.component';
import { TeacherAssignAssignmentComponent } from './Teacher/teacher-assign-assignment/teacher-assign-assignment.component';
import { TeacherExtendAssignmentDeadlineComponent } from './Teacher/teacher-extend-assignment-deadline/teacher-extend-assignment-deadline.component';
import { NotesListComponent } from './Teacher/notes-list/notes-list.component';
import { StudentSidebarComponent } from './Student/student-sidebar/student-sidebar.component';
import { StudentLoginComponent } from './Student/student-login/student-login.component';
import { StudentClassroomsListComponent } from './Student/student-classrooms-list/student-classrooms-list.component';
import { DownloadNotesComponent } from './Student/download-notes/download-notes.component';
import { StudentSubmitAssignmentComponent } from './Student/student-submit-assignment/student-submit-assignment.component';
import { DownloadAssignedAssignmentComponent } from './Student/download-assigned-assignment/download-assigned-assignment.component';
import { DeleteSubmittedAssignmentComponent } from './Student/delete-submitted-assignment/delete-submitted-assignment.component';
import { StudentMaterialsListComponent } from './Student/student-materials-list/student-materials-list.component';
import { StudentStreamComponent } from './Student/student-stream/student-stream.component';


const routes: Routes = [
{ path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  {
    path: 'admin-courses', component: AdminCourseComponent, children: [
      { path: 'create', component: CreatecourseComponent },
      { path: 'list', component: CourseListComponent },
      { path: 'update-course/:courseId', component: UpdateCourseComponent },
    ]
  },

  {
    path: 'admin-classroom', component: AdminClassroomComponent, children: [
      { path: 'create-classroom', component: CreateClassroomComponent },
      { path: 'update-classroom/:classroomId', component: UpdateClassroomComponent },
      { path: 'classroom-list', component: ClassroomlistComponent },
    ]
  },
  {
    path: 'admin-teacher', component: AdminTeacherComponent, children: [
      {path: 'teacher-list', component: TeacherListComponent}
    ]
  },

  {
    path:'admin-student', component:AdminStudentComponent, children:[
      {path:'student-list', component: StudentListComponent}
    ]
  },

  {path:'teacher-sidebar', component:TeacherSidebarComponent},
   
   { path:'teacher-login', component: TeacherLoginComponent},

      {path:'teacher-classrooms-list', component:ClassroomsListComponent} ,
      {path:'teacher-stream', component:TeacherStreamComponent},
      {path:'teacher-upload-notes', component:TeacherUploadNotesComponent},
      {path:'teacher-delete-notes', component:TeacherDeleteNotesComponent},
      {path:'teacher-assign-assignment',component:TeacherAssignAssignmentComponent},
      {path:'teacher-extend-assignment-deadline', component:TeacherExtendAssignmentDeadlineComponent},
      {path:'teacher-get-materials-list', component:NotesListComponent},
     
      {path:'student-sidebar', component:StudentSidebarComponent},
      {path:'student-login', component:StudentLoginComponent},
      {path:'student-classrooms-list', component:StudentClassroomsListComponent},
      { path: '', redirectTo: '/classrooms/1', pathMatch: 'full' },
      {path:'student-stream', component:StudentStreamComponent},
      {path:'download-notes', component:DownloadNotesComponent},
      {path:'submit-assignment', component: StudentSubmitAssignmentComponent},
      {path:'download-assigned-assignment', component:DownloadAssignedAssignmentComponent},
      {path:'delete-submitted-assignment', component: DeleteSubmittedAssignmentComponent},
      {path:'student-get-materials-list', component:StudentMaterialsListComponent},
      
      
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
