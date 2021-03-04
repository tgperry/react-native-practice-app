import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { deleteIngredients } from '../store/slices/IngredientSlice';


const ListIngredients = () => {
    const ingredients = useSelector(state => state.ingredientsSlice.ingredients);
    const dispatch = useDispatch();

    const removeItem = (itemName) => {
        dispatch(deleteIngredients(itemName));
    }

    const ItemView = (item, key) => {
        return (
            <View key={key} style={styles.itemView}>
                <Text style={styles.textStyle}>
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

const styles = StyleSheet.create({
    itemView: {
        flexDirection: 'row', 
        backgroundColor: 'lightgray', 
        marginBottom: '5%'
    },
    textStyle: {
        fontSize: 20, 
        width: '80%', 
        paddingLeft: '5%', 
        paddingTop: '2%'
    }
});

export default ListIngredients;