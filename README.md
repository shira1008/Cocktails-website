# Cocktails website
I learned how to fetch and display data from API and asynchronous javascript (async and await) 
Using  TheCocktailDB - An open, crowd-sourced database of drinks and cocktails from around the world.  using the free JSON api.
https://www.thecocktaildb.com/api.php

- added event listener on DOMContentLoaded - fetch and display this URL(presentDrinks.js) https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s </br>
 meaning that by deafult when visiting the site its gonna display cocktails strating with "s"
-  I added event listener "keyup" - in order to search for a cocktail. the event change the URL based on the value that the user wrote.
-  U can click on each cocktail and see deatails about each one. By fetching https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i= with maching id after the "=". (singleDrink.js)
-  Rest of the  js in the src folder
-  I also added loading


TheCocktailDB - https://www.thecocktaildb.com/


The live site: </br>
<a href="https://shira-api-project.netlify.app/"><img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/netlify.svg' alt='netlify' height='40'></a>
