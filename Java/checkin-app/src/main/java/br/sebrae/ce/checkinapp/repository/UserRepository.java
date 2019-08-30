package br.sebrae.ce.checkinapp.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.sebrae.ce.checkinapp.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>{

}
