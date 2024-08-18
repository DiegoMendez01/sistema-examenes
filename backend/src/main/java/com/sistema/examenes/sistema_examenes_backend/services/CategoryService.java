package com.sistema.examenes.sistema_examenes_backend.services;

import java.util.Set;

import com.sistema.examenes.sistema_examenes_backend.models.Category;

public interface CategoryService
{
	Category createCategory(Category category);
	
	Category updateCategory(Category category);
	
	Set<Category> getCategories();
	
	Category getCategoryById(Long id);
	
	void deleteCategory(Long id);
}