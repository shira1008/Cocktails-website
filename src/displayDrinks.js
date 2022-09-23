import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";
//access drinks from the object
const displayDrinks = ({ drinks }) => {
  const section = get(".section-center");
  const title = get(".title");
  //drinks gonna be array or null
  if (!drinks) {
    //hide loading
    hideLoading();
    title.textContent = "sorry, no drinks match your search";
    //cause i dont wanna display some drinks while error
    section.innerHTML = null;
    return;
  }
  //i need the drinks[i]
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `    <!-- single drink -->
        <a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>
        <!-- end of drink -->`;
    })
    .join("");
  //hide loading
  hideLoading();
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
