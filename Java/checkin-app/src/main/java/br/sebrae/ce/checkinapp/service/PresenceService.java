package br.sebrae.ce.checkinapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.sebrae.ce.checkinapp.model.Person;
import br.sebrae.ce.checkinapp.model.Presence;
import br.sebrae.ce.checkinapp.repository.PresenceRepository;

@Service
public class PresenceService {

	@Autowired
	PresenceRepository repository;
	
	public List<Presence> getPresences(){
		return (List<Presence>) repository.findAll();
	}
	
	public Presence addPresence(Presence presence) {
		return repository.save(presence);
	}
	
	public Person populatePresence(int idPresence, Person person) {
		
		List<Presence> presences = (List<Presence>) repository.findAll();
		
		for (Presence presence : presences) {
			if (presence.getId() == idPresence) {
				presence.getPersons().add(person);
				repository.save(presence);
				return person;
			}
		}

		return null;
	}
}