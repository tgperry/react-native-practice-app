import React from 'react';
import { View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { deleteIngredients } from '../store/slices/IngredientSlice';


const ListIngredients = ({props}) => {
    const ingredients = useSelector(state => state.ingredientsSlice.ingredients);
    const dispatch = useDispatch();

    const removeItem = (itemName) => {
        dispatch(deleteIngredients(itemName));
    }

    const ItemView = (item, key) => {
        return (
            <View key={key} style={{flexDirection: 'row', backgroundColor: 'lightgray', marginBottom: '5%'}}>
                <Text style={{fontSize: 20, width: '80%', paddingLeft: '5%', paddingTop: '2%'}}>
                    {item.quantity} {item.name}
                </Text>
                <Button
                    onPress={()=>removeItem(item.name)}
                    title="Remove"
                    color="red"
                />
            </View>
        )
    }

    return (
        <View style={{width: '100%'}}>
            <ScrollView style={{marginTop: '10%'}}>
                {ingredients.map(ItemView)}
            </ScrollView>
        </View>
    );
}

export default ListIngredients;