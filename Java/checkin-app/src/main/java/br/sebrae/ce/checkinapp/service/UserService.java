package br.sebrae.ce.checkinapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.sebrae.ce.checkinapp.model.User;
import br.sebrae.ce.checkinapp.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository repository;
	
	public List<User> getUsers(){
		return (List<User>) repository.findAll();
	}
	
	public User addUser(User user) {
		return repository.save(user);
	}
}