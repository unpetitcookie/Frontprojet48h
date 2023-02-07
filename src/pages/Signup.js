import React from 'react';

const Signup = () => {

    return (
        <div>
            <h2>Créer un compte</h2>
            <form method="post" id="formulaire">
                <label for="prenom">Prenom</label>
                <input type="text" id="prenom" /><br />
                <label for="nom">Nom</label>
                <input type="text" id="nom" /><br />
                <label for="Email">Email</label>
                <input type="text" id="Email" /><br />
                <label for="mdp">Mot de passe</label>
                <input type="text" id="mdp" /><br />
                <input type="submit" value="Sign In" id="button" />
            </form>
        </div>
    )
}

export default Signup;