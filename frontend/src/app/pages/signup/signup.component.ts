import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';

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

  constructor(private userService : UserService) {}

  ngOnInit(): void {
      
  }

  formSubmit() {
    console.log(this.user)
    if(this.user.username == '' || this.user.username == null){
      alert('El nombre de usuario es requerido')
      return;
    }

    this.userService.saveUser(this.user).subscribe(
      (data) => {
        console.log(data)
        alert('Usuario guardado con exito')
      },(error) => {
        console.log(error)
        alert('Ha ocurrido un error en el sistema')
      }
    )
  }
}
