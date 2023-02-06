import './home.css';
import React from 'react';
import './home.css';
import Header from './Header.js';


class App extends React.Component {  
    render() {  
      return (  
        <div>
           <Header /> 
           <div class="home">
                <div class="home-left">
                    <div class="block">
                        <img src="https://www.cdiscount.com/pdt2/2/9/8/1/700x700/mp47165298/rw/paire-basket-baskets-chaussures-sneakers-lidl-edit.jpg" alt=""/>
                        <h1>Nom du produit</h1>
                        <p>description</p>
                    </div>
                </div>
            </div>
        </div>
      );  
    }  
  }  

export default App; 


