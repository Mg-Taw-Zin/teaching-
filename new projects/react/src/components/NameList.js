import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const person = [
    { id: 1, name: "Bruce", age: 30, skill: "React" },
    { id: 2, name: "Clark", age: 31, skill: "Angula" },
    { id: 3, name: "Diana", age: 32, skill: "Vue" },
  ];
  const personList = person.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  return <div>{personList}</div>;
}

export default NameList;
