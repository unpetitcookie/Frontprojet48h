import React, { useState } from "react";
import { Link } from "react-router-dom";
import { parseString } from "../createAccount";
import '../styles/createAccount.css'
import image from "../image-home.png"


const Signup = () => {
  const [Prenom, setPrenom] = useState("");
  const [Nom, setNom] = useState("");
  const [Email, setEmail] = useState("");
  const [mdp, setmdp] = useState("");

  const loguser = (evant) => {
    evant.preventDefault();
    const data = { Prenom, Nom, Email, mdp };
    for (const key in data) {
      if (typeof data[key] === "string") {
        data[key] = parseString(data[key]);
      }
    }
    console.log(data);
  };
  return (
    <div>
      <Link to="/">
        <img src={image} alt="" id="image-home"/>
      </Link>
      <div id="formContainer">
        <h2>Créer un compte</h2>
      <form id="formulaire" onSubmit={(event) => loguser(event)}>
        <label for="prenom">Prenom</label>
        <input
        required
          type="text"
          id="prenom"
          value={Prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <br />
        <label for="nom">Nom</label>
        <input
        required
          type="text"
          id="nom"
          value={Nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <br />
        <label for="Email">Email</label>
        <input
        required
          type="text"
          id="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label for="mdp">Mot de passe</label>
        <input
        required
          type="text"
          id="mdp"
          value={mdp}
          onChange={(e) => setmdp(e.target.value)}
        />
        <br />
        <input type="submit" value="Log In" id="button" required />
      </form>
      </div>
      
    </div>
  );
};

export default Signup;
