//checking the value and run presentDrinks
import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
const input = get('[name="drink"]');

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  // if falsy return
  if (!value) return;
  //   if not falsy:
  presentDrinks(`${baseURL}${value}`);
});
