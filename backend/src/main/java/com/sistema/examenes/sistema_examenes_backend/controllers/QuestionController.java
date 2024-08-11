package com.sistema.examenes.sistema_examenes_backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.examenes.sistema_examenes_backend.services.QuestionService;

@RestController
@RequestMapping("api/v1/questions")
@CrossOrigin("*")
public class QuestionController
{
	@Autowired
	private QuestionService questionService;
}