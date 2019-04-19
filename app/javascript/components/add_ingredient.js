const add_ing = () => {
  const ingredients = document.querySelectorAll("#cocktail_ingredient_ids > option");
}

ingredients.forEach((
ingredient) => {
  ingredient.addEventListener("click, (event)") => {
    select.push(ingredient.innerHTML)
    fetch('/ingedient/new', body: {
      headers: json
      body: JSON.strinify ({
        ingredient: ingredient.innerHTML
      })
    })
  }
})

export { add_ing };
