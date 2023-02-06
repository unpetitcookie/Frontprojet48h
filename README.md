# Frontprojet48h

## Demande du Client:
* Créer un réseau de boutiques fédérées indépendant des MarketPlaces et ainsi proposer à leurs clients partout en France le paiement et la livraison de leurs produits.

## Objectif:
* Proposer une solution compatible que les commerçants pourront utiliser.

## Solutions:
* Un réseau de serveurs ("instances"), décentralisé (qui ne dépendent pas d’une entité centrale)
* Chaque serveur peut accueillir plusieurs commerçants approuvés par un administrateur pour chacune des instances
* Possibilité de trouver des produits de tous les sites marchands du serveur ainsi que les autres sites sur les serveurs connectés à l’instance actuelle et les serveurs connectés à ces autres serveurs et ainsi de suite
* Option permettant à l’administrateur d’une instance de pouvoir bloquer l’affichage des sites d’une instance spécifique
* La création d’un compte client sur une seule des instance permettra de:
    * Acheter des produits provenant de leur instance de manière classique
    * Passer commande chez les commerçants des autres instances depuis la leur; le paiement aura lieu sur l'autre instance mais une nouvelle inscription ne sera pas nécessaire.

## Mise en place:
Développement d’un site web permettant aux marchands de disposer leurs produits et pour les clients de pouvoir naviguer dans toutes les boutiques mises à disposition sur le réseau.
Une API par serveur pourra permettre la communication entre les différentes instances et l’insertion d’un serveur dans le réseau.
Utilisation d’une base de données pour stocker tous les enregistrements tels que les comptes clients et comptes marchant ainsi que les listes de tous les produits mis à disposition dans les boutiques.
Mise en place d’une architecture réseau redondante afin d'éviter une perte irréversible de données.

* Site Web:

Pour la partie Frontend du site web, elle sera faite à l’aide des langages Html et Css.
La partie Backend est en JavaScript.
Le site web sera composé d’une page d'accueil où seront affichés les différents produits des boutiques
![](/image/Screenshot%20from%202023-02-06%2013-55-08.png)
Une page de création de compte:
![](/image/Screenshot%20from%202023-02-06%2014-10-14.png)
Une page de connexion:
![](/image/Screenshot%20from%202023-02-06%2014-13-30.png)
Une page pour ajouter un produit:
![](/image/Screenshot%20from%202023-02-06%2014-35-39.png)
Une page d’administration:
![](/image/Screenshot%20from%202023-02-06%2015-39-13.png)

* Base de Données:

MLD de la base de données:
![](/image/drawSQL-chall48h-export-2023-02-06.png)

## Organisation du projet:
![](/image/Screenshot%20from%202023-02-06%2011-21-39.png)

## Techno utilisées pour la réalisation du projet:

![](/image/js-logo.png)

* ## Backend du site web

![](/image/732212.png)

* ## Squelette du site web 

![](/image/logo.svg)

* ## Lanccement du serveur pour le site web

![](/image/CSS3_logo_and_wordmark.svg.png)

* ## Style du site

![](/image/elephant.png)

* ## SGBD du site web

![](/image/Docker-Logo-White-RGB_Horizontal-730x189-1.png.webp)

* ## Déploiement des instances 