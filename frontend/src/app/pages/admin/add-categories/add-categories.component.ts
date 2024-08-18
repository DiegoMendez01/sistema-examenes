import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-categories',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './add-categories.component.html',
  styleUrl: './add-categories.component.css'
})
export class AddCategoriesComponent implements OnInit {

  category = {
    title: '',
    description: ''
  };

  constructor(private categoryService : CategoriesService, private snack : MatSnackBar, private router : Router){}

  ngOnInit(): void {
      
  }

  formSubmit() {
    if(this.category.title.trim() == '' || this.category.title == null){
      this.snack.open('El titulo es requerido', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.categoryService.createCategory(this.category).subscribe(
      (data : any) => {
        this.category.title = '';
        this.category.description = '';
        Swal.fire('Categoria', 'Categoria agregada correctamente', 'success')
        this.router.navigate(['/admin/categories'])
      },
      (error) => {
        Swal.fire('Categoria', 'Error al agregar una categoria', 'error')
      }
    )
  }
}
