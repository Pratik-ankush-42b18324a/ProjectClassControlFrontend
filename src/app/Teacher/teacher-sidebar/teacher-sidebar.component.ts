import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-teacher-sidebar',
  templateUrl: './teacher-sidebar.component.html',
  styleUrl: './teacher-sidebar.component.css'
})
export class TeacherSidebarComponent implements AfterViewInit{

    ngAfterViewInit() {
      const sidebar = document.getElementById('sidebar');
      const sidebarCollapse = document.getElementById('sidebarCollapse');
      const sidebarOverlay = document.getElementById('sidebarOverlay');
  
      if (sidebarCollapse) {
        sidebarCollapse.addEventListener('click', () => {
          if (sidebar) {
            sidebar.classList.toggle('collapsed');
          }
        });
      }
  
      if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
          if (sidebar) {
            sidebar.classList.remove('collapsed');
          }
        });
      }
  
     
    }
}
