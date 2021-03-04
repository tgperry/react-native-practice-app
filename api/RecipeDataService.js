//DO NOT PUBLISH ANYTHING WITH EXPOSED API TOKEN IN FRONTEND
const API_TOKEN = '' /* ADD YOUR OWN API TOKEN HERE FOR THE SPOONACULAR API */
const BASE_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

class RecipeDataService {

    async getRecipesFromIngredients(ingredients) {
        const ingr = ingredients.join(',+');
        console.log(ingr)
        try {
            let response = await fetch(`${BASE_URL}?ingredients=${ingr}&number=10&apiKey=${API_TOKEN}`);
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        } catch (error) {
            console.log("ERROR", error);
        }
    }

    async getRequestTest() {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let responseJson = await response.json();
            return responseJson;
        } catch {
            console.log("ERROR");
        }
    }

}

export default new RecipeDataService(); 