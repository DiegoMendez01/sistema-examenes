import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginData = {
    "username": '',
    "password": ''
  }

  constructor(private snack : MatSnackBar, private loginService : LoginService) {}

  ngOnInit(): void {

  }

  formSubmit(){
    if (this.loginData.username == null || this.loginData.username.trim() === '') {
      this.snack.open('El nombre de usuario es requerido', 'Aceptar', {
        duration: 3000
      });
      return;
    }
    
    if (this.loginData.password == null || this.loginData.password.trim() === '') {
      this.snack.open('La contraseña es requerida', 'Aceptar', {
        duration: 3000
      });
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data : any) => {
        console.log(data);
      },(error) => {
        console.log(error)
      }
    )
  }
}
