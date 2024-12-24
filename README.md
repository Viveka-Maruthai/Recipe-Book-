# Recipe Book
This web-based Recipe Book allows users to store and manage their recipes. Users can add new recipes, edit existing ones, mark them as favorites, and filter through them using a search bar. The recipes are stored in the browser's local storage, ensuring that the data persists even after the page is refreshed.

## Features
- **Add Recipes**: Users can input a recipe's title, ingredients, instructions, and category.
- **Edit Recipes**: Users can edit existing recipes.
- **Delete Recipes**: Users can remove recipes from the list.
- **Favorites**: Users can mark recipes as favorites.
- **Search**: Users can search for recipes by title.
- **Recipe Categories**: Recipes can be categorized (e.g., Breakfast, Lunch, Dinner, Dessert).
- **Persistent Data**: Recipes are stored in local storage, so they are saved even after the page is refreshed.

## Files
- `index.html`: The HTML structure for the Recipe Book.
- `styles.css`: The CSS for styling the application.
- `script.js`: The JavaScript for handling the logic of adding, editing, deleting, and filtering recipes.

## How to Use
1. Open the `index.html` file in your browser.
2. **Search for Recipes**: Type into the search bar to filter recipes by their title.
3. **Add a Recipe**: Enter a recipe title, ingredients, instructions, and select a category, then click "Add Recipe" to add it to the list.
4. **Edit a Recipe**: Click "Edit" next to a recipe to update its details.
5. **Delete a Recipe**: Click "Delete" next to a recipe to remove it.
6. **Favorite a Recipe**: Click the star icon next to a recipe to mark it as a favorite.

## How It Works
- **Add Recipe**: The user fills out the form and clicks "Add Recipe". The recipe is added to an array and stored in local storage.
- **Edit Recipe**: When editing a recipe, the details of the selected recipe are displayed in the form, and after making changes, the recipe is updated in local storage.
- **Delete Recipe**: Deleting a recipe removes it from the array and updates local storage.
- **Favorites**: Clicking the star icon toggles the favorite status, and the change is saved in local storage.
- **Search**: The search functionality filters the recipe list based on the title of the recipe.

## Requirements
- A modern web browser (Chrome, Firefox, Safari, etc.).
- No additional software or installations required.

## Local Storage
All recipes are stored in the browser's local storage. This allows the data to persist even when the page is reloaded or the browser is closed and reopened. You can view the saved recipes in the browser's local storage under `recipes`.

## Customization
You can modify the list of categories or add more features, such as additional filters (e.g., filtering by favorites) or a rating system for recipes.

