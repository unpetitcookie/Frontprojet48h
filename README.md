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
![](/image/elephant.png)
![](/image/Docker-Logo-White-RGB_Horizontal-730x189-1.png.webp)
![](/image/logo.svg)
![](/image/CSS3_logo_and_wordmark.svg.png)
![](/image/732212.png)

## Réflexion IA&DATA:

L'une des questions qui peut émerger est : Comment proposer des suggestions d'achat fédérées aux utilisateurs enregistrés en fonctions de leurs commandes déjà passées ?

2 algorithmes envisageables :
* Système basé sur le contenu : celui-ci se base sur les achats précédents de l'utilisateur pour lui proposer des articles similaires
* Système de type filtrage collaboratif : celui-là propose à l'utilisateur des articles achetés par d'autres utilisateurs similaires (ayant déjà acheté les mêmes articles) 
![image](/image/IA.png)

Le premier est le plus facile à implémenter (et nécessite peu de données au départ) et les résultats seront facilement interprétables. Quelques étapes sont à respecter pour l'implémenter :
* Création d'un profil élément pour chaque article : description de l'article à l'aide de différentes caractéristiques (autrement dit création d'une liste de tags)
* Calcul de similarité entre un article déjà acheté et un nouvel article
* Proposition du nouvel article si la similarité dépasse un seuil (fixé au préalable)

La première étape nécessite de demander au commerçant de rentrer des tags lors de l'ajout d'un article à son catalogue, par exemple le type d'article, sa couleur, domaine d'utilisation etc. Ces données seront ensuite ajoutées à la table 'Article' de la base de données. Il faudra également traiter et nettoyer ces données pour les homogénéiser, par exemple tous les accents pourront être supprimés, de même pour les majuscules.
Ensuite chaque produit devra être encodé dans une représentation numérique par une technique de vectorisation. La plus utilisée dans le traitement de documents est la TF-IDF (Term Frequency-Inverse Document Frequency). Cette méthode permet de générer une matrice 2D où les lignes représentent les articles et les colonnes représentent les tags associés. 
Le calcul de similarité entre les articles pourra alors prendre en entrée les lignes de cette matrice. La similarité cosinus pourra être utilisée. Il s'agit du produit scalaire entre deux vecteurs divisé par le produit de leurs normes. Le résultat est donc compris dans l'intervalle [-1;1], -1 indique deux vecteurs opposés et 1 indique deux vecteurs colinéaires donc avec une forte similarité.

