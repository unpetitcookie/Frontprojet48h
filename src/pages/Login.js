import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Login.css'
import image from "../image-home.png"

const Login = () => {
  const [email, setemail] = useState("");
  const [mdp, setmdp] = useState("");

  const loguser = (evant) => {
    console.log(email, mdp);
    evant.preventDefault();
  };
  return (
    <div>
      <Link to="/">
        <img src={image} alt="" id="image-home" />
      </Link>
      <div id="formContainer">
        <h2>Se connecter</h2>
        <form id="formulaire-login" onSubmit={(event) => loguser(event)}>
          <label id="label-login" for="Email">Email</label>
          <input
            required
            id="Email"
            type="email"
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label for="mdp">Mot de passe</label>
          <input
            type="text"
            id="mdp"
            value={mdp}
            onChange={(e) => setmdp(e.target.value)} /><br />
          <a id="forgot-mdp-login" href="">Mot de passe oublié ?</a>
          <a id="create-account-login" href="/signup">Créer un compte</a>
          <input type="submit" value="Log In" id="button-login" required />
        </form>
      </div>
    </div>
  );
};

export default Login;
