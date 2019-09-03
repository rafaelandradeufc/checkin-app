package br.sebrae.ce.checkinapp.importdata;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Configuration;

import br.sebrae.ce.checkinapp.model.Event;
import br.sebrae.ce.checkinapp.model.Presence;
import br.sebrae.ce.checkinapp.model.User;
import br.sebrae.ce.checkinapp.service.EventService;
import br.sebrae.ce.checkinapp.service.PresenceService;
import br.sebrae.ce.checkinapp.service.UserService;

@Configuration
public class MainImportData implements ApplicationListener<ApplicationReadyEvent> {

	@Autowired
	private UserService userService;
	@Autowired
	private EventService eventService;
	@Autowired
	private PresenceService presenceService;
	
	private void setUsers() {
		User user1 = new User("Rafael Andrade", "rafael", "qwe123");
		User user2 = new User("Galileu Mendes", "galileu", "qwe123");
		
		userService.addUser(user1);
		userService.addUser(user2);
	}
	
	private void setEvent() {
		LocalDate dateBegin = LocalDate.of(2019, 9, 5);
		LocalDate dateEnd = LocalDate.of(2019, 9, 7);
		
		Event event = new Event("FENECRAT", dateBegin, dateEnd);
		
		eventService.addEvent(event);
	}
	
	private void setPresence() {
		LocalDate date1 = LocalDate.of(2019, 9, 5);
		LocalDate date2 = LocalDate.of(2019, 9, 6);
		LocalDate date3 = LocalDate.of(2019, 9, 7);
		
		Presence presence1 = new Presence(date1);
		Presence presence2 = new Presence(date2);
		Presence presence3 = new Presence(date3);
		
		presenceService.addPresence(presence1);
		presenceService.addPresence(presence2);
		presenceService.addPresence(presence3);
	}

	private boolean isUserRepositoryEmpty() {
		return userService.count() == 0;
	}

	@Override
	public void onApplicationEvent(ApplicationReadyEvent event) {

		if (isUserRepositoryEmpty()) {
			setUsers();
			setEvent();
			setPresence();
		}
	}
}
