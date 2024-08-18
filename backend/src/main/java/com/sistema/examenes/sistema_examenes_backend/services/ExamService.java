package com.sistema.examenes.sistema_examenes_backend.services;

import java.util.Set;

import com.sistema.examenes.sistema_examenes_backend.models.Exam;

public interface ExamService
{
	Exam createExam(Exam exam);
	
	Exam updateExam(Exam exam);
	
	Set<Exam> getExams();
	
	Exam getExamById(Long id);
	
	void deleteExam(Long id);
}