package br.sebrae.ce.checkinapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.sebrae.ce.checkinapp.model.Event;
import br.sebrae.ce.checkinapp.service.EventService;

@RestController
@RequestMapping("/api/event")
public class EventController {
	
	@Autowired
	public EventService eventService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Event> getEvents() {
		return eventService.getEvents();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Event addEvent(@RequestBody Event event) {
		return eventService.addEvent(event);
	}
}
