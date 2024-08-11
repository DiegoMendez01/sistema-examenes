import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SignupComponent,
    DashboardComponent,
    WelcomeComponent,
    ProfileComponent,
    SidebarComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
