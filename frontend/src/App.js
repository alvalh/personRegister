import "./App.css";
import { TextField } from "@mui/material";
import { Component, useState, useEffect } from "react";
import { addPerson, getAllPeople } from "./personService";
import axios from "axios";

export function App() {
  const [person, setPerson] = useState("");
  const [people, setPeople] = useState([]);

  const addPersonToPeople = (person) => {
    console.log(person);
  };

  const handleClick = (person) => {
    addPerson(person);
    console.log(people);
    setPeople((current) => [...current, person]);

    setPerson("");
  };

  const handleChange = (e) => {
    setPerson(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Input">
          <TextField label="Name" onChange={handleChange}></TextField>
          <button className="sendButton" onClick={() => handleClick(person)}>
            Send
          </button>
        </div>
        <ol>
          {people.map((person) => (
            <li>{person}</li>
          ))}
        </ol>
      </header>
    </div>
  );
}

export default App;
