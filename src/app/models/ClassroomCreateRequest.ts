export class ClassroomCreateRequest {
  courseId: number;
  teacherId: number;
  classroomName: string;
  classroomDescription: string;

  constructor(courseId: number, teacherId: number, classroomName: string, classroomDescription: string) {
    this.courseId = courseId;
    this.teacherId = teacherId;
    this.classroomName = classroomName;
    this.classroomDescription = classroomDescription;
  }
}