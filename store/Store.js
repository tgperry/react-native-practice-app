import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';

import ingredientsSlice from './slices/IngredientSlice';

/*const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@ingredients', value)
    } catch (e) {
        console.log("Saving data error", e);
    }
}

const getData = async () => {
    try {
        AsyncStorage.getItem('@ingredients').then(value=>
            {
                if(value !== null) {
                    let obj = JSON.parse(value);
                    console
                    return obj;
                } else {
                    return {ingredients: []}
                }
            })
    } catch(e) {
        console.log("Loading data error", e);
    }
}*/

const store = configureStore({
    reducer: {
        ingredientsSlice: ingredientsSlice,
    }
});

export default store;