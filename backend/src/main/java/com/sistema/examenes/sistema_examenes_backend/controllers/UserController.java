package com.sistema.examenes.sistema_examenes_backend.controllers;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.examenes.sistema_examenes_backend.models.Rol;
import com.sistema.examenes.sistema_examenes_backend.models.User;
import com.sistema.examenes.sistema_examenes_backend.models.UserRol;
import com.sistema.examenes.sistema_examenes_backend.services.UserService;

@RestController
@RequestMapping("api/users")
public class UserController
{
	@Autowired
	private UserService userService;
	
	@PostMapping("/")
	public User saveUser(@RequestBody User user) throws Exception
	{
		Set<UserRol> roles = new HashSet<>();
		
		Rol rol = new Rol();
		rol.setId(2L);
		rol.setName("NORMAL");
		
		UserRol userRol = new UserRol();
		userRol.setUser(user);
		userRol.setRol(rol);
		
		return userService.saveUser(user, roles);
	}
	
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username)
	{
		return userService.getUser(username);
	}
	
	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable("userId") Long userId)
	{
		userService.deleteUser(userId);
	}
}
