package br.sebrae.ce.checkinapp.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.sebrae.ce.checkinapp.model.Presence;

@Repository
public interface PresenceRepository extends CrudRepository<Presence, Integer>{
	
}
