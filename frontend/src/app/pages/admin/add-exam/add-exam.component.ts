import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExamService } from '../../../services/exam.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-add-exam',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './add-exam.component.html',
  styleUrl: './add-exam.component.css'
})
export class AddExamComponent implements OnInit {

  categories : any = [];

  exam = {
    title : '',
    description : '',
    maximumPoints : '',
    numberOfQuestions : '',
    stateDelete: true,
    category : {
      id : ''
    }
  }

  constructor(private categoryService : CategoriesService, private examService : ExamService, private snack : MatSnackBar) {}

  ngOnInit(): void {
      this.categoryService.listCategories().subscribe(
        (data : any) => {
          this.categories = data;
        },
        (error) => {
          Swal.fire("Examen", "Error al cargar las categorias", "error")
        }
      )
  }

  formSubmit(){
    if(this.exam.title.trim() == '' || this.exam.title == null){
      this.snack.open("El titulo es requerido", 'Aceptar' ,{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
      return;
    }
  }

}
