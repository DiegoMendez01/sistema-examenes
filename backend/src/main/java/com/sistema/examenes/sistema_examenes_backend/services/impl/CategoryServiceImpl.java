package com.sistema.examenes.sistema_examenes_backend.services.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.examenes.sistema_examenes_backend.models.Category;
import com.sistema.examenes.sistema_examenes_backend.repositories.CategoryRepository;
import com.sistema.examenes.sistema_examenes_backend.services.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService
{
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Override
	public Category createCategory(Category category) {
		return categoryRepository.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		return categoryRepository.save(category);
	}

	@Override
	public Set<Category> getCategories() {
		return new LinkedHashSet<>(categoryRepository.findAll());
	}

	@Override
	public Category getCategoryById(Long id) {
		return categoryRepository.findById(id).get();
	}

	@Override
	public void deleteCategory(Long id) {
		Category category = new Category();
		category.setId(id);
		categoryRepository.delete(category);
	}

}