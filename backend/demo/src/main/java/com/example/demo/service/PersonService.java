package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.PersonDao;
import com.example.demo.model.Person;

@Service
public class PersonService {

	private final PersonDao personDao;
	
	@Autowired 
	public PersonService(PersonDao personDao) {
		this.personDao = personDao;
	}
	
	public List<Person> getAllPeople() {
		return personDao.selectAllPeople();
	}
	
	public int addPerson(Person person) {
		return personDao.insertPerson(person);
	}
}