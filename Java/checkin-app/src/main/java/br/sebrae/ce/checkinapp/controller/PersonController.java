package br.sebrae.ce.checkinapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.sebrae.ce.checkinapp.model.Person;
import br.sebrae.ce.checkinapp.service.PersonService;

@RestController
@RequestMapping("/api/person")
public class PersonController {

	@Autowired
	PersonService personService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Person> getPersons() {
		return personService.getPersons();
	}

	@RequestMapping(value = "/{cpf}", method = RequestMethod.GET)
	public Person getPersonByCpf(@PathVariable String cpf) {
		return personService.getPersonByCpf(cpf);
	}

	@RequestMapping(method = RequestMethod.POST)
	public Person addPerson(@RequestBody Person person) {
		return personService.addPerson(person);
	}
}
