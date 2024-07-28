package com.sistema.examenes.sistema_examenes_backend.services.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.examenes.sistema_examenes_backend.models.User;
import com.sistema.examenes.sistema_examenes_backend.models.UserRol;
import com.sistema.examenes.sistema_examenes_backend.repositories.RolRepository;
import com.sistema.examenes.sistema_examenes_backend.repositories.UserRepository;
import com.sistema.examenes.sistema_examenes_backend.services.UserService;

@Service
public class UserServiceImpl implements UserService
{
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RolRepository rolRepository;
	
	@Override
	public User saveUser(User user, Set<UserRol> userRoles) throws Exception {
		User userLocal = userRepository.findByUsername(user.getUsername());
		if(userLocal != null) {
			System.out.println("El usuario ya existe");
			throw new Exception("El usuario ya esta presente");
		}else {
			for(UserRol userRol : userRoles) {
				rolRepository.save(userRol.getRol());
			}
			user.getUserRoles().addAll(userRoles);
			userLocal = userRepository.save(user);
		}
		return userLocal;
	}
}