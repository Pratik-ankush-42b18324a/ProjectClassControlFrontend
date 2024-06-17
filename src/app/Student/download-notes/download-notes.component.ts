import { Component } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { saveAs } from 'file-saver';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-download-notes',
  templateUrl: './download-notes.component.html',
  styleUrls: ['./download-notes.component.css']
})
export class DownloadNotesComponent {

  classroomId!: number;
  materialId!: number;

  constructor(private studentService: StudentService) { }

  downloadMaterial(): void {
    this.studentService.downloadMaterial(this.classroomId, this.materialId).subscribe({
      next: (response: HttpResponse<Blob>) => {
        const filename = this.getFilenameFromResponse(response);
        saveAs(response.body!, filename);
      },
      error: (error) => {
        console.error('Error downloading material:', error);
      }
    });
  }

  private getFilenameFromResponse(response: HttpResponse<Blob>): string {
    const contentDisposition = response.headers.get('content-disposition');
    const matches = /filename="(.+)"/.exec(contentDisposition!);
    return matches && matches[1] ? matches[1] : 'downloaded-file';
  }
}
