package com.sistema.examenes.sistema_examenes_backend.exceptions;

public class UserNotFoundException extends Exception
{
	public UserNotFoundException()
	{
		super("El usuario con ese username no existe en la base de datos, vuelva a intentar");
	}
	
	public UserNotFoundException(String message)
	{
		super(message);
	}
}