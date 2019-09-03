package br.sebrae.ce.checkinapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.sebrae.ce.checkinapp.controller.dto.PresenceDTO;
import br.sebrae.ce.checkinapp.model.Person;
import br.sebrae.ce.checkinapp.model.Presence;
import br.sebrae.ce.checkinapp.service.PresenceService;

@RestController
@RequestMapping("/api/presence")
public class PresenceController {

	@Autowired
	PresenceService presenceService;

	@RequestMapping(method = RequestMethod.GET)
	public List<PresenceDTO> getPresences() {
		return PresenceDTO.toPresenceDTOList(presenceService.getPresences());
	}

	@RequestMapping(method = RequestMethod.POST)
	public Presence addPresence(@RequestBody Presence presence) {
		return presenceService.addPresence(presence);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public Person populatePresence(@PathVariable int id, @RequestBody Person person) {
		return presenceService.populatePresence(id, person);
	}
}