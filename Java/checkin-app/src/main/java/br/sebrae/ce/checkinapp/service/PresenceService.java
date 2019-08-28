package br.sebrae.ce.checkinapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}