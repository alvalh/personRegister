package com.example.demo.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Person;
import com.example.demo.service.PersonService;

@CrossOrigin(origins = "localhost:3000")
@RestController
@RequestMapping("api/person")
public class PersonController {
	
	private final PersonService personService;
	
	@Autowired
	public PersonController(PersonService personService) {
		this.personService = personService;
	}
	
	@GetMapping
	public List<Person> getAllPeople() {
		return personService.getAllPeople();
	}
	
	@CrossOrigin
	@PostMapping
	public void addPerson(@RequestBody Person person) {
		personService.addPerson(person);
	}
}
