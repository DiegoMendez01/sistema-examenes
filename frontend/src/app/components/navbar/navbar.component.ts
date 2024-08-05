import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user: any = null;

  constructor(public login : LoginService) {}

  ngOnInit(): void {
    this.login.loginStatusSubject.subscribe(
      (status: boolean) => {
        if (status) {
          this.user = this.login.getUser();
        } else {
          this.user = null;
        }
      }
    );

    // Check if user is already logged in when the component initializes
    if (this.login.isLoggedIn()) {
      this.user = this.login.getUser();
    }
  }

  public logout()
  {
    this.login.logout();
    window.location.reload();
  }


}
