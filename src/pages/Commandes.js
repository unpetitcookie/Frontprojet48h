

const Commande = () => {


    return (
        <div id="mainContainer">
            <div id="formContainer">
                <h2>Paiement</h2>
                <input type={"text"} id="numCarte" placeholder="numero de carte"></input>
                <input type={"text"} id="cryptogramme" placeholder="criptogramme"></input>
                <input type={"text"} id="date" placeholder="date"></input>
                <input type={"submit"} value="Envoyer"></input>
            </div>
            <div id="infoCommande">
                <p>Prix de votre commande</p>
                <p>Vos articles</p>

            </div>
        </div>
    )
}