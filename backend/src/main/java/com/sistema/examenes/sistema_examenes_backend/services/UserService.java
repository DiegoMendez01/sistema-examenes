package com.sistema.examenes.sistema_examenes_backend.services;

import java.util.Set;

import com.sistema.examenes.sistema_examenes_backend.models.User;
import com.sistema.examenes.sistema_examenes_backend.models.UserRol;

public interface UserService
{
	public User saveUser(User user, Set<UserRol> userRoles) throws Exception;
	
	public User getUser(String username);
	
	public void deleteUser(Long userId);
}