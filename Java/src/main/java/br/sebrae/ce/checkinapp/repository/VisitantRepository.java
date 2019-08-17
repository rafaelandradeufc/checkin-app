package br.sebrae.ce.checkinapp.repository;

import br.sebrae.ce.checkinapp.model.Visitant;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VisitantRepository extends MongoRepository<Visitant, String> {
	
	

}
