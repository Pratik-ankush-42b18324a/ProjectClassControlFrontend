import { Component } from '@angular/core';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrl: './student-sidebar.component.css'
})
export class StudentSidebarComponent {

  
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
