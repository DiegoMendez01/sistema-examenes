package com.sistema.examenes.sistema_examenes_backend.models;

public class JwtResponse
{
	private String token;
	
	public JwtResponse()
	{
		
	}
	
	public JwtResponse(String token)
	{
		this.token = token;
	}
	
	public String getToken()
	{
		return token;
	}
	
	public void setToken(String token)
	{
		this.token = token;
	}
}
