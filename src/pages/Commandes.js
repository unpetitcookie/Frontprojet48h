import home from "../styles/image-home.png"
import "../styles/commande.css"

export const Commande = () => {
  return (
    <div id="mainContainer">
      <a href="/">
        <img id="icon-home" src={home} />
      </a>
      <div id="formContainer">
        <h2>Paiement</h2>
        <input
          type={"text"}
          id="inputCarte"
          placeholder="numero de carte"
        ></input><br/>
        <input
          type={"text"}
          id="inputCarte"
          placeholder="criptogramme"
        ></input><br/>
        <input type={"text"} id="inputCarte" placeholder="date"></input><br/>
        <input type={"submit"} id="button" value="Envoyer"></input>
      </div>
      <div id="infoCommande">
        <p>Prix de votre commande </p>
        <p>Vos articles</p>
      </div>
    </div>
  );
};
