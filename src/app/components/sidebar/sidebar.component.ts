import { Component, Input } from '@angular/core';
import { LogoutApp } from '../../core/utils/Logout';
import { CheckDate } from '../../core/helpers/dateEvent';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Input() title : string = '';
  
  sidebarMenuOpen: boolean = false;
  
  eventDate = CheckDate.eventDate();

  handleSidebar() {
    const sidebar = document.querySelector('.sidebar-menu');
    if (sidebar) {
      sidebar.classList.toggle('active');

      this.sidebarMenuOpen = !this.sidebarMenuOpen
    }
  }

  logout() {
    LogoutApp.logout();
  }
}
