import reducer, { setIngredients, initialState } from '../store/slices/IngredientSlice';

describe('set ingredient', () => {
    it('adds a value to the store', () => {
        const ingredient = {
            name: 'apples',
            quantity: '5'
        };

        const newState = reducer(initialState, setIngredients(ingredient));
        const expectedLength = 4;
        const arrayLength = newState.ingredients.length;

        expect(arrayLength).toEqual(expectedLength);
    })
})