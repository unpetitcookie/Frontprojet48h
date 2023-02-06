# Documentation du projet

## Demande du Client:
* Créer un réseau de boutiques fédérées indépendant des MarketPlaces et ainsi proposer à leurs clients partout en France le paiement et la livraison de leurs produits.

## Objectif:
* Proposer une solution compatible que les commerçants pourront utiliser.
* Permettre à tous les commerçants d'être visibles et trouvables par une clientèle plus large, tout en conservant la souveraineté de leur boutique en ligne et de leur modèle économique.

## Solutions:
* Un réseau de serveurs (instances), décentralisé (qui ne dépendent pas d’une entité centrale)
* Chaque serveur pourra accueillir plusieurs commerçants
* Possibilité de trouver des produits de tous les sites marchands du serveur ainsi que les autres sites sur les serveurs connectés à l’instance actuelle et les serveurs connectés à ces autres serveurs et ainsi de suite
* Le premier marchand d'une instance sera désigné comme étant l'administateur du serveur
* Les administrateurs pourront:
    * Valider ou refuser l'ajout d'un commerçant dans leur instance
    * Choisir le mode de paiement disponible sur leur instance
    * Bloquer ou débloquer l'affichage des boutiques de certaines instances
* Les marchands pourront:
    * Disposer leurs produits en leur ajoutant une description , une image et un prix.
    * Modifier un article deja exposé, par example: son prix, son image et sa description
    * Supprimer un article de sa boutique
* Les clients pourront:
    * Parcourir les boutiques mises à disposition sur le réseau
    * Ajouter les produits qui les intéresse dans un panier
    * Annuler leur panier
    * Payer leur panier en utilisant le mode de paiement choisis par l'administrateur
    * Supprimer un article de leur panier
* La création d’un compte client sur une seule des instance permettra de:
    * Acheter des produits provenant de leur instance de manière classique
    * Passer commande chez les commerçants des autres instances depuis la leur; le paiement aura lieu sur l'autre instance mais une nouvelle inscription ne sera pas nécessaire.

## Mise en place:
Développement d’un site web servira d'interface graphique pour les clients, les marchands et l'administrateur du serveur.

Une API par serveur permettra la communication entre les différentes instances et l’insertion d’un serveur dans le réseau.
Utilisation d’une base de données pour stocker tous les enregistrements tels que les comptes clients et comptes marchand ainsi que les listes de tous les produits mis à disposition dans les boutiques.
Mise en place d’une architecture réseau redondante afin d'éviter une perte irréversible des données.

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

## Problèmes liées à cette solution:
Ce modèle repose sur une base de données centralisée: si tous les serveurs de base de données sont hors service, l'ensemble du réseau sera inopérant car les instances n'auront plus accès aux données, résultant en une impossibilité de se connecter sur le site et d'acceder aux produits proposés.
Un autre problème est que normalement dans un system décentralisé, les utilisisateurs ne contrôlent que leurs propres données car aucun serveur de données centralisé ou d'entité thiers ne peut modifier les données enregistré ce qui améliore beaucoup la sécurité de ce genre d'applications, cependant dans le modèle proposé, théoriquement, il est toujours possible de modifier les enregistrements de la base de données.

Une solution envisageable serait de mettre en place un autre modèle qui reposerait sur une blockchain chiffrée; les informations dans une blockchain sont immuables, elles ne peuvent plus être modifiées une fois enregistrées dedans. Cela resoudrait le fait que les informations dans une base de données traditionnelles puissent être modifiable après enregistrement. De plus, chaque noeud et donc instances/serveurs, possedra une copie de cette blockchain ce qui le rend indépendant d'un serveur central de base données, ainsi, en cas de problèmes sur le réseau, chaque serveur pourra continuer de fonctionner.

Le choix d'une base de données traditionnelle a été fait dû à une contrainte de temps, la nature du projet nous imposait de rendre un prototype de solution en 48h ce qui rend compliqué la mise en place d'une blockchain valide.

## Organisation du projet:
![](/image/Screenshot%20from%202023-02-06%2011-21-39.png)