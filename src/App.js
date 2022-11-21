import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import WelcomeFunctional from "./components/WelcomeFunctional/WelcomeFunctional";

const name = "Pepe";
const whoIAm = <h1>Hola, me llamo {name}</h1>;
const numbers = [1, 2, 3, 4, 5];

const users = [
  {
    name: "Matias",
    email: "matias@gmail.com",
  },
  {
    name: "Asdrubal",
    email: "asdrubal@gmail.com",
  },
  {
    name: "Euralio",
    email: "euralio@gmail.com",
  },
  {
    name: "Eustaquio",
    email: "eustaquio@gmail.com",
  },
  {
    name: "Angustias",
    email: "angustias@gmail.com",
  },
];
const listItems = numbers.map((number) => <li>{number}</li>);
const user = users.map((user) => (
  <span>
    Nombre: {user.name}, Correo: {user.email}
  </span>
));

function App() {
  const person = {
    name: "Sofia",
    lastName: "Pinilla",
  };
  return (
    <div className="App">
      <Header />
      <span>Nombre: Socorro, Correo: socorro@gmail.com </span>
      {user}
      <div className="listas">
        <ul>{listItems}</ul>
        <ul>{listItems}</ul>
      </div>
      <Welcome person={person} />
      <Welcome person={person} />
      <Welcome person={person} />
      {/* <Welcome name="Pepito" lastName="Noseque" /> */}

      {/* <Welcome name="Alex" lastName="Jimenez" /> */}
      <WelcomeFunctional person={person} />
      {whoIAm}
    <div>

    </div>
    </div>
  );
}

export default App;
