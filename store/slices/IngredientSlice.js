import { createSlice, createAction } from '@reduxjs/toolkit';
import _ from 'lodash'

export const setIngredientsError = createAction('getIngredientsError');
export const deleteIngredientsError = createAction('deleteIngredientsError');

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        ingredients: [
            {
                name: 'tomatoes',
                quantity: 5
            },
            {
                name: 'potatoes',
                quantity: 10
            }
        ]
    },
    reducers: {
        //Using immer with slice, we can ignore rules barring state mutation
        setIngredients: (state, action) => {
            state.ingredients = [ action.payload, ...state.ingredients ]; //Payload here is array of ingredients
        },

        deleteIngredients: (state, action) => {
            state.ingredients = _.filter(state.ingredients, ingredient => ingredient.name !== action.payload); //Payload here is name of ingredient to delete
        }
    }
});

export const { setIngredients, deleteIngredients } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;