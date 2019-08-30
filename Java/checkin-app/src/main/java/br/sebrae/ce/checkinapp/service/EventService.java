package br.sebrae.ce.checkinapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.sebrae.ce.checkinapp.model.Event;
import br.sebrae.ce.checkinapp.repository.EventRepository;

@Service
public class EventService {
	
	@Autowired
	public EventRepository repository;

	public List<Event> getEvents() {
		return (List<Event>) repository.findAll();
	}
	
	public Event addEvent(Event event) {
		return repository.save(event);
	}
}
