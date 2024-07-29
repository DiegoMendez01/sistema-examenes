import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  public user = {
    username : '',
    password : '',
    name     : '',
    lastName : '',
    email    : '',
    phone    : ''
  }

  constructor(private userService : UserService, private snack : MatSnackBar) {}

  ngOnInit(): void {
      
  }

  formSubmit() {
    console.log(this.user)
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('El nombre de usuario es requerido', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.userService.saveUser(this.user).subscribe(
      (data) => {
        console.log(data)
        Swal.fire('Usuario', 'Usuario guardado con exito', 'success')
      },(error) => {
        console.log(error)
        this.snack.open('Ha ocurrido un error en el sistema', 'Aceptar', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    )
  }
}
