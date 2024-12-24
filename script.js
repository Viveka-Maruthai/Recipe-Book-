const addRecipeBtn = document.getElementById('add-recipe-btn');
const recipeListContainer = document.getElementById('recipe-list-container');
const recipeTitleInput = document.getElementById('recipe-title');
const recipeIngredientsInput = document.getElementById('recipe-ingredients');
const recipeInstructionsInput = document.getElementById('recipe-instructions');
const recipeCategoryInput = document.getElementById('recipe-category');
const recipeDetailsContainer = document.getElementById('recipe-details');
const recipeDetailTitle = document.getElementById('recipe-detail-title');
const recipeDetailIngredients = document.getElementById('recipe-detail-ingredients');
const recipeDetailInstructions = document.getElementById('recipe-detail-instructions');
const recipeDetailCategory = document.getElementById('recipe-detail-category');
const searchInput = document.getElementById('search-input');

let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
let editingIndex = null;

// Function to render the list of recipes
function renderRecipeList() {
    recipeListContainer.innerHTML = '';
    recipes.forEach((recipe, index) => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.textContent = recipe.title;
        
        // Add a favorite icon
        const favoriteIcon = document.createElement('span');
        favoriteIcon.textContent = recipe.favorite ? '★' : '☆';
        favoriteIcon.classList.add('favorite');
        favoriteIcon.onclick = () => toggleFavorite(index);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => showRecipeDetails(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteRecipe(index);

        recipeItem.appendChild(favoriteIcon);
        recipeItem.appendChild(editButton);
        recipeItem.appendChild(deleteButton);
        recipeListContainer.appendChild(recipeItem);
    });
}

// Function to add a new recipe
function addRecipe() {
    const title = recipeTitleInput.value.trim();
    const ingredients = recipeIngredientsInput.value.trim();
    const instructions = recipeInstructionsInput.value.trim();
    const category = recipeCategoryInput.value;

    if (title && ingredients && instructions) {
        const newRecipe = { title, ingredients, instructions, category, favorite: false };
        if (editingIndex !== null) {
            recipes[editingIndex] = newRecipe;
            editingIndex = null;
        } else {
            recipes.push(newRecipe);
        }
        localStorage.setItem('recipes', JSON.stringify(recipes));

        // Clear inputs after adding
        recipeTitleInput.value = '';
        recipeIngredientsInput.value = '';
        recipeInstructionsInput.value = '';
        recipeCategoryInput.value = 'Breakfast';

        renderRecipeList();
    } else {
        alert('Please fill all fields.');
    }
}

// Function to show recipe details
function showRecipeDetails(index) {
    const recipe = recipes[index];
    recipeDetailTitle.textContent = recipe.title;
    recipeDetailIngredients.textContent = recipe.ingredients;
    recipeDetailInstructions.textContent = recipe.instructions;
    recipeDetailCategory.textContent = recipe.category;
    recipeDetailsContainer.style.display = 'block';
    editingIndex = index;
}

// Function to close the recipe details
function closeDetails() {
    recipeDetailsContainer.style.display = 'none';
}

// Function to edit a recipe
function editRecipe() {
    const recipe = recipes[editingIndex];
    recipeTitleInput.value = recipe.title;
    recipeIngredientsInput.value = recipe.ingredients;
    recipeInstructionsInput.value = recipe.instructions;
    recipeCategoryInput.value = recipe.category;
    recipeDetailsContainer.style.display = 'none';
}

// Function to delete a recipe
function deleteRecipe(index) {
    recipes.splice(index, 1);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    renderRecipeList();
}

// Function to toggle favorite status
function toggleFavorite(index) {
    recipes[index].favorite = !recipes[index].favorite;
    localStorage.setItem('recipes', JSON.stringify(recipes));
    renderRecipeList();
}

// Function to filter recipes by title
function filterRecipes() {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchQuery));
    renderRecipeList(filteredRecipes);
}

// Add event listener to the Add Recipe button
addRecipeBtn.addEventListener('click', addRecipe);

// Render the recipe list when the page loads
renderRecipeList();
