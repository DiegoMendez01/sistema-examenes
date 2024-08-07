import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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
export class ProfileComponent {

}
