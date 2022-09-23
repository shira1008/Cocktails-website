import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const idURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const presentDrink = async () => {
  const id = localStorage.getItem("drink");
  if (!id) {
    window.location.replace("index.html");
  } else {
    const drink = await fetchDrinks(`${idURL}${id}`);
    //display single drink
    displayDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", presentDrink);
