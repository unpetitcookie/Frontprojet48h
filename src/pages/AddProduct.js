import React from 'react'
import '../styles/AddProduct.css'
import Header from './Header.js';

const Addproduct = () => {
    return (
        <div>
            <Header />
            <div id="formContainer">
                <h2>Ajouter un nouveau produit</h2>
                <form method="post" id="formulaire">
                    <label for="nameProduct">Nom du produit</label>
                    <input type="text" id="nameProduct"/><br/>
                    <label for="Description">Description</label>
                    <input type="text" id="Description"/><br/>
                    <label for="Images">Insérez des images du produit</label>
                    <input type="file" id="Images" accept="image/jpeg, image/png, image/jpg" multiple="multiple"/><br/>
                    <output></output>
                    <label for="Price">Prix</label>
                    <input type="text" id="Price"/><br/>
                    <label for="Type">Type</label>
                    <input type="text" id="Type"/><br/>
                    <label for="Tags">Tags</label>
                    <input type="text" id="Tags"/><br/>
                    <input type="submit" value="Soumettre" id="button" />
                </form>
            </div>
        </div>
    )
}
export default Addproduct;