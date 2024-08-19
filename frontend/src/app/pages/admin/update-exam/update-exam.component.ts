import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../../../services/exam.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-update-exam',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './update-exam.component.html',
  styleUrl: './update-exam.component.css'
})
export class UpdateExamComponent implements OnInit {

  constructor(private route : ActivatedRoute, private examService : ExamService, private categoryService : CategoriesService, private router : Router) {}

  examId = 0;
  exam       : any;
  categories : any;

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['id'];
    this.examService.getExamById(this.examId).subscribe(
      (data) => {
        this.exam = data;
      },
      (error) => {
        Swal.fire('Examen', 'Error al obtener el examen', 'error')
      }
    )

    this.categoryService.listCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        Swal.fire('Examen', 'Error al cargar las categorias', 'error')
      }
    )
  }

  public updateExam()
  {
    this.examService.updateExam(this.exam).subscribe(
      (data) => {
        Swal.fire("Examen", "Se ha actualizado el examen correctamente", "success").then(
          (e) => {
            this.router.navigate(['/admin/exams']);
          }
        );
      },
      (error) => {
        Swal.fire("Examen", "No se ha actualizado el examen correctamente", "error")
      }
    )
  }
}
