import React, { useState } from 'react';

const AddProduct=()=>{
   // const [image,setImage]=useState('');

    const [description,setDescription]=useState('');
    const [nameProduct,setNameProduct]=useState('');
    const [price,setPrice]=useState('');
    const [tag,setTag]=useState('');




    const addProduct=(e)=>{
        console.log(nameProduct,description,price,tag)
        e.preventDefault();
    }
    return(
        <div>
            <form  id ="formulaire" onSubmit={(e)=> addProduct(e)}>
         <div class="container">  
            <h1>Ajouter un Produit:</h1>
            <aside class="printimage">
                <button> <label for="avatar">Importer une image du produit: </label></button>
                <input type="file"
                id="avatar" name="avatar"
                accept="image/png, image/jpeg"/>
                
            </aside>
                
                    <input value={nameProduct}onChange={(e)=>setNameProduct(e.target.value)} type="text" placeholder= "Nom du Produit" name="Produit" id ="nameProduct"></input><br/>

                <div class="Descrition">
                <textarea value={description}onChange={(e)=>setDescription(e.target.value)} name="Descrition" placeholder="Descrition" rows="5" cols="30" id="Descrition"></textarea><br/>
                </div>
                <div>
                    <label for="productPrice">Prix :</label>
                    <input value={price}onChange={(e)=>setPrice(e.target.value)} type="number" placeholder="0" step="0.01" min="0"id="price"></input>
                </div>
                <label>Tag:</label>
                <input value={tag}onChange={(e)=>setTag(e.target.value)} type="text" name="Tag" id="Tag"></input><br/>
                
                
                <input type="submit" value="Submit" />
    </div>
</form>
        </div>
    );
}
export default AddProduct;