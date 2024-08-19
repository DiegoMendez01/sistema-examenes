import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './update-question.component.html',
  styleUrl: './update-question.component.css'
})
export class UpdateQuestionComponent implements OnInit {

  questionId : any = 0;
  question : any;
  exam : any;

  constructor(private route : ActivatedRoute, private router : Router, private questionService : QuestionService) {}

  ngOnInit(): void {
      this.questionId = this.route.snapshot.params['id'];
      this.questionService.getQuestion(this.questionId).subscribe(
        (data) => {
          this.question = data;
        },
        (error) => {
          Swal.fire("Pregunta", "No se pudo obtener la pregunta", "error")
        }
      )
  }

  public updateQuestion()
  {
    this.questionService.updateQuestion(this.question).subscribe(
      (data) => {
        Swal.fire("Pregunta", "La pregunta se ha actualizado correctamente", "success").then(
          (e) => {
            this.router.navigate(['admin/view-questions/'+this.question.exam.id+'/'+this.question.exam.title])
          }
        )
      },
      (error) => {
        Swal.fire("Pregunta", "La pregunta no se ha actualizado correctamente", "error")
      }
    )
  }
}