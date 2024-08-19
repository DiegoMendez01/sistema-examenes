import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  categories : any;

  constructor(private categoryService : CategoriesService, private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.categoryService.listCategories().subscribe(
      (data : any) => {
        this.categories = data;
      },
      (error) => {
        this.snack.open("Error al cargar las categorias", "Aceptar", {
          duration: 3000
        })
      }
    )
  }
}
