import React, { useState } from 'react';
import '../styles/AddProduct.css'

const AddProduct = () => {
    const [allImages, setImage] = useState([]);
    const [description, setDescription] = useState('');
    const [nameProduct, setNameProduct] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('')
    const [tag, setTag] = useState('');
    const addProduct = (e) => {
        console.log(nameProduct, description, price, type, tag)
        e.preventDefault();
    }
    /*function displayImages(e) {
        console.log("display img START", allImages)

        const images = allImages
        console.log("images before push", images)

        images.push(URL.createObjectURL(e.target.files[0]))
        console.log("images after push", images)

        setImage(images)
        console.log("display img END", allImages)
      }
*/
    /*   function deleteImage(index) {
        const tempImages = allImages.splice(index, 1)
        console.log(index,tempImages)
        setImage(tempImages)
      }
    */
    return (
        <div>
            <form id="formulaire" onSubmit={(e) => addProduct(e)}>
                <h2>Ajouter un nouveau produit</h2>
                <form method="post" id="formulaire" />
                <label for="nameProduct">Nom du produit</label>
                <input value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} type="text" id="nameProduct"></input><br />
                <label for="Description">Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" id="Description"></input><br />
                <label for="Images">Insérez des images du produit</label>
                <input type="file" id="Images" accept="image/jpeg, image/png, image/jpg" multiple="multiple"></input><br />


                {/* <output>
            { allImages.forEach((img, index) => {
            console.log("map :", {img, index});
            return <>
                <div class="image" key={index}>
                <img src={img} alt="image"/>
                <span onClick={()=>deleteImage(index)}>&times;</span>
              </div>
              </>
            })
            }
            </output> */}
                <label for="Price">Prix</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" id="Price"></input><br />
                <label for="Type">Type</label>
                <input value={type} onChange={(e) => setType(e.target.value)} type="text" id="Type"></input><br />
                <label for="Tags">Tags</label>
                <input value={tag} onChange={(e) => setTag(e.target.value)} type="text" id="Tags"></input><br />
                <input type="submit" value="Soumettre" id="button" />
            </form>
        </div >
    );
}
export default AddProduct;
{/*  
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
        </div>*/}