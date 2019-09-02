package br.sebrae.ce.checkinapp.importdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Configuration;

import br.sebrae.ce.checkinapp.model.User;
import br.sebrae.ce.checkinapp.service.UserService;

@Configuration
public class MainImportData implements ApplicationListener<ApplicationReadyEvent> {

	@Autowired
	private UserService userService;

	private void setUsers() {
		User user = new User("Rafael Andrade", "rafael", "qwe123");

		userService.addUser(user);

	}

	private boolean isUserRepositoryEmpty() {
		return userService.count() == 0;
	}

	@Override
	public void onApplicationEvent(ApplicationReadyEvent event) {
		if (isUserRepositoryEmpty()) {

			setUsers();
		}

	}

}
