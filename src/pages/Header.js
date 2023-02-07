import React from 'react';
import '../styles/header.css';
import perso from '../perso.png';
// import shop from '../shop.png';

class Header extends React.Component {
    render() {
        return (
            <section>
                <div class="header">
                    <div class="header-left">
                        <h1 class="h1-header">Open-Octodon</h1>
                    </div>
                    <div class="header-right">
                        <a class="active" href="#home">Home</a>
                        <a class="active" href="/addproduct">Ajouter un produit</a>
                        <form>
                            <input type="text" name="search" placeholder="Search.." />
                        </form>
                        <a class="login" href="/login">
                            <img src={perso} />
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}
