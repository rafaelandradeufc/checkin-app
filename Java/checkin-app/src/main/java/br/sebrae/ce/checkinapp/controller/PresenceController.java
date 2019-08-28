package br.sebrae.ce.checkinapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.sebrae.ce.checkinapp.model.Presence;
import br.sebrae.ce.checkinapp.service.PresenceService;

@RestController
@RequestMapping("/api/presence")
public class PresenceController {
	
	@Autowired
	PresenceService presenceService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Presence> getPresences() {
		return presenceService.getPresences();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Presence addPresence(@RequestBody Presence presence) {
		return presenceService.addPresence(presence);
	}
}
