package br.sebrae.ce.checkinapp.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.sebrae.ce.checkinapp.model.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long>{

	Person getByCpf(String cpf);
	
}
