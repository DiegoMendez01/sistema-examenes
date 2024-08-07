import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../../profile/profile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    ProfileComponent,
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
