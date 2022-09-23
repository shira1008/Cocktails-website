const setDrink = (section) => {
  section.addEventListener("click", function (e) {
    //כדי לבטל את הניווט לעמוד אחר לבנתיים שאוכל לראות
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    // console.log(id);
    localStorage.setItem("drink", id);
  });
};
export default setDrink;
