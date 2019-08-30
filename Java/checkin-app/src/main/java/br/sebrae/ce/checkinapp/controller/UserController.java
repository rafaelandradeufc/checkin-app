package br.sebrae.ce.checkinapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.sebrae.ce.checkinapp.model.User;
import br.sebrae.ce.checkinapp.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	UserService userService;

	@RequestMapping(method = RequestMethod.GET)
	public List<User> getUsers() {
		return userService.getUsers();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
}
