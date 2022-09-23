import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s";

//function that deals with fetch and display - presentDrinks

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(URL);
});
