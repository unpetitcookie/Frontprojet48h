import React from 'react'

const Login = () => {
    return (
        <div>
            <a href="Home.html"><img src="../image/image-home.png"/></a>
            <div id="formContainer">
                <h2>Se connecter</h2>
                <form method="post" id="formulaire">
                    <label for="Email">Email</label>
                    <input required id="Email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/><br/>
                    <label for="mdp">Mot de passe</label>
                    <input type="text" id="mdp"/><br/>
                    <input type="submit" value="Log In" id="button" required/>
                </form>
            </div>
        </div>
        
        )
    }
    
    export default Login;