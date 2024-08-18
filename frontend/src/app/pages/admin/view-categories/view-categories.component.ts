import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'; 
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CategoriesService } from '../../../services/categories.service';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.css'
})
export class ViewCategoriesComponent implements OnInit {

  categories : any = [

  ]

  constructor(private categoryService : CategoriesService) {}

  ngOnInit() : void {
    this.categoryService.listCategories().subscribe(
      (data : any) => {
        this.categories = data;
      },
      (error) => {
        Swal.fire('Categoria', 'Error al cargar las categorias', 'error')
      }
    )
  }
}
