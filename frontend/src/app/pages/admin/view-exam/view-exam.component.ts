import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../services/exam.service';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-exam',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './view-exam.component.html',
  styleUrl: './view-exam.component.css'
})
export class ViewExamComponent implements OnInit {

  exams : any = [

  ]

  constructor (private examService : ExamService) {}

  ngOnInit(): void {
      this.examService.listExams().subscribe(
        (data : any) => {
          this.exams = data;
          console.log(this.exams);
        },
        (error) => {
          Swal.fire('Examen', 'Error al cargar los examenes', 'error')
        }
      )
  }

  deleteExam(id : any){
    Swal.fire({
      title: "Eliminar examen",
      text: "¿Estás seguro de eliminar el examen?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      this.examService.deleteExam(id).subscribe(
        (data) => {
          this.exams = this.exams.filter((exam : any) => exam.id != id)
          Swal.fire("Examen", "El examen ha sido eliminado correctamente", "success");
        },
        (error) => {
          Swal.fire("Examen", "El examen no ha sido eliminado correctamente", "error");
        }
      )
    })
  }

}