# pomme-d-api
Pomme de reinette et pomme d'api Tapis tapis rouge

Introduction du sujet

Vous avez vu les principes de base de l’architecture MVC et vous avez
commencé à implémenter des éléments indispensables d’un backend
comme un Router. Vous avez donc de plus en plus de logique qui est en train
d’être jouée côté serveur. Dans les applications modernes, les backends sont
de plus en plus des API qui fournissent des données à une interface frontend.

Vous commencez à réfléchir sur un projet intéressant qui utiliserait une API
publique disponible. Comme les beaux jours approchent et que vous
souhaitez faire attention à votre alimentation, vous décidez de vous tourner
vers l’Open Food Facts API. C’est une API très simple, avec une
documentation suffisante afin de l’utiliser correctement. L’élément dont vous
allez avoir besoin est le code bar du produit que vous cherchez. Vous pouvez
faire une recherche sur le produit que vous cherchez pour avoir son code
barre ici.

Interroger une API
Dans un premier temps, il va falloir vous familiariser avec le fait de faire des
requêtes auprès d’une API. Pour ce faire, vous allez avoir besoin d’utiliser des
outils pour faire des requêtes après de l’Open Food Facts API. Pour ça, vous
avez plusieurs options :

_1

● Postman : Un outil très utilisé pour faire HTTP auprès d’API. Vous pouvez
trouver beaucoup de ressources et de documentation sur cet outil.
● Insomnia : Deuxième outil le plus utilisé pour faire des requêtes HTTP et
des tests d’API.
● Hoppscotch : Un client de base de données open source, qui fonctionne
sous forme d’application web. Très simple d’utilisation et pratique pour
la collaboration.
N’hésitez pas à tester les différents endpoints (ou routes) de l’API afin de voir
quelles sont les données renvoyées par l’API, les filtres possibles, les endpoints
possibles, etc.

Récupérer les données dans une application
Maintenant que vous avez appris à interroger l’API, il est temps d’en récupérer
les données pour les traiter dans une application. Pour ce faire, vous avez
deux possibilités :
● Récupérer les données avec votre Backend avec PHP et curl
● Récupérer les données côté Frontend avec JavaScript et fetch
Notre objectif va être de créer une application pour récupérer surtout les
informations nutritionnelles sur les produits alimentaires (les calories, les
macronutriments, les éventuels additifs auxquels être vigilants, etc).

Ajouter de la logique
Nous avons de quoi faire récupérer des données, mais nous ne faisons aucun
traitement dessus actuellement. Il pourrait être intéressant d’ajouter
plusieurs fonctionnalités à notre application pour la rendre un peu plus
dynamique et aussi moins faire appel à l’API, mais construire un backend à
notre application afin de limiter les appels.

_2

● Installez un router dans votre application pour avoir une application
avec des URL qui pourraient fonctionner comme des endpoints d’API.
● Enregistrez les produits en base de données : Si le produit n’existe pas
en BDD, récupérez les données de l’API et insérer le produit en BDD.
● Ajoutez un module d’authentification (inscription / connexion)
● Permettez à l’utilisateur d’ajouter un produit à une liste de favoris
● Permettez de remplir les aliments consommés sur la journée pour
avoir des statistiques sur le total de la journée
● Créez des objectifs pour l’utilisateur (en nb de kcal, de
macronutriments, etc)
Pour le frontend, vous avez le droit de faire ce que vous voulez. Vous pouvez
faire une application simplement avec PHP, et faire tout le rendu côté serveur.
Vous pouvez aussi ajouter du JavaScript pour ajouter un peu de réactivité.
Vous pouvez faire tout un backend en PHP et utiliser les données avec React.

Dans tous les cas, il vous faudra une base de données permettant de stocker
des utilisateurs, des favoris et des produits avec les informations de base.

_3

Compétences visées

- Programmation Orientée Objet
- PHP
- JavaScript
- API

Rendu

Tous ces documents doivent être mis en ligne sur votre repo GitHub :
https://github.com/prenom-nom/pomme-d-api.

Pensez à rendre ce repo public.

Base de connaissances

- API
- PHP : cURL
- Using the Fetch API
- Installing Altorouter
- https://fr.openfoodfacts.org/
