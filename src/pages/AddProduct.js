import React from 'react';

const AddProduct=()=>{
    return(
        <div>
                <form method="post" id ="formulaire">
         <div class="container">  
            <h1>Ajouter un Produit:</h1>
            <aside class="printimage">
                <button> <label for="avatar">Importer une image du produit: </label></button>
                <input type="file"
                id="avatar" name="avatar"
                accept="image/png, image/jpeg"/>
                
            </aside>
                
                    <input type="text" placeholder= "Nom du Produit" name="Produit" id ="nameProduct"></input><br/>
                <div class="Descrition">
                <textarea name="Descrition" placeholder="Descrition" rows="5" cols="30" id="Descrition"></textarea><br/>
                </div>
                <div>
                    <label for="productPrice">Prix :</label>
                    <input type="number" placeholder="0" step="0.01" min="0"id="price"></input>
                </div>
                <label>Tag:</label>
                <input type="text" name="Tag" id="Tag"></input><br/>
                
                
                <input type="submit" value="Submit" />
    </div>
</form>
        </div>
    );
}
export default AddProduct;