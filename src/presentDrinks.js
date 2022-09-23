import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";
//showdrinks = presentdrinks
const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url);

  //display drinks
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
