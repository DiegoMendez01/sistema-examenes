package com.sistema.examenes.sistema_examenes_backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sistema.examenes.sistema_examenes_backend.models.Category;
import com.sistema.examenes.sistema_examenes_backend.models.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long>
{
	List<Exam> findByCategory(Category category);
	
	List<Exam> findByStateDelete(boolean stateDelete);
	
	List<Exam> findByCategoryAndStateDelete(Category category, boolean stateDelete);
}