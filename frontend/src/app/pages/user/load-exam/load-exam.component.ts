import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../../services/exam.service';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-exam',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './load-exam.component.html',
  styleUrl: './load-exam.component.css'
})
export class LoadExamComponent implements OnInit {

  catId : any;
  exams : any;

  constructor(private route : ActivatedRoute, private examService : ExamService) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      this.catId = params['catId']

      if(this.catId == 0){
        this.examService.listExams().subscribe(
          (data : any) => {
            this.exams = data;
          },
          (error) => {
            Swal.fire("Mensaje", "Error al cargar los examenes", "error")
          }
        )
      }else{
        this.examService.getExamByCategory(this.catId).subscribe(
          (data : any) => {
            this.exams = data;
          },
          (error) => {
            Swal.fire("Mensaje", "Error al cargar el examen", "error")
          }
        )
      }
    })
  }
}