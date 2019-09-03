package br.sebrae.ce.checkinapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.sebrae.ce.checkinapp.model.User;
import br.sebrae.ce.checkinapp.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public List<User> getUsers() {
		return (List<User>) userRepository.findAll();
	}

	public User addUser(User user) {
		return userRepository.save(user);
	}

	public long count() {
		return userRepository.count();
	}
	
	public User getByLogin(String login){		
		return userRepository.findByLogin(login);
	}
}