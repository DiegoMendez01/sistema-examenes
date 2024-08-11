import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user : any = null;

  constructor(private loginService : LoginService) {}

  ngOnInit(): void
  {
    this.user = this.loginService.getUser();
  }
}
