/*Affichage des recettes*/
var recipeElement = document.getElementById('recipes-list');
for(let recipe of recipes){
  recipeElement.innerHTML += recipe.show();
}

showIngredients();
showAppliances()
showUstensils()



document.querySelectorAll('.inputcombobox').forEach(searchbar => {
  searchbar.addEventListener('input', function () {
  var ingredientsBox = document.getElementById('ingredients-list');
  var appliancesBox = document.getElementById('appliances-list');
  var ustensilsBox = document.getElementById('ustensils-list');
  if(ingredientsSearchTool.length<3){
  } else{
    ingredientsBox.innerHTML = "";
    showIngredients(filteredIngredients);
    }
  })
})




/* Affichage des tuiles d'ingredients recherchés */
/* var tileriesZone = document.querySelector(".tileries-search");
for(let i=0; i<ingredientsArrayCleaned; i++){
  ingredientsArrayCleaned[i] = this.ingredientsArrayCleaned;
  ingredientsArrayCleaned[i].addEventListener('click', function(){
    tileriesZone.innerHTML += `<div class="tile-search">
    <p>${ingredientsArrayCleaned[i]}</p>
    <i class="far fa-times-circle"></i></div>`;
  })
} */