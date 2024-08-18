import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../services/exam.service';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-exam',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule
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

}