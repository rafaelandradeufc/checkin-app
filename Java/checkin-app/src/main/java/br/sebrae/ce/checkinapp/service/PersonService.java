package br.sebrae.ce.checkinapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.sebrae.ce.checkinapp.model.Person;
import br.sebrae.ce.checkinapp.repository.PersonRepository;

@Service
public class PersonService {

	@Autowired
	public PersonRepository repository;

	public List<Person> getPersons() {
		return (List<Person>) repository.findAll();
	}

	public Person addPerson(Person person) {
		return repository.save(person);
	}

	public Person getPersonByCpf(String cpf) {
		return repository.getByCpf(cpf);

	}
}
