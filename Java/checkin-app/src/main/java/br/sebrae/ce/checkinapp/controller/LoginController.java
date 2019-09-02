package br.sebrae.ce.checkinapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.sebrae.ce.checkinapp.model.User;
import br.sebrae.ce.checkinapp.service.UserService;

@RestController
@RequestMapping("/api/login")
public class LoginController {

	
	@Autowired
	UserService userService;

	
	@RequestMapping(value = "/{login}",method = RequestMethod.GET)
	public User getUser(@PathVariable String login) {
		return userService.getByLogin(login);
	}
	
	
}
