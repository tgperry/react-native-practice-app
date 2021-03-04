import React, {useState} from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import ListIngredients from '../components/ListIngredients';
import { setIngredients } from '../store/slices/IngredientSlice';

function PantryScreen(props) {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const dispatch = useDispatch();

    const onSubmit = () => {
        const ingredient = {
            name: name,
            quantity: quantity
        }

        dispatch(setIngredients(ingredient));

        setName('')
        setQuantity('')
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: '10%', backgroundColor: 'tomato', width: '100%', height: '10%'}}>
                <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center', maxWidth: '80%', color: 'ivory'}}>
                    Pantry
                </Text>
            </View>
            <View style={{ flex: 7, width: '100%'}}>
                <ListIngredients/>
            </View>
            <View style={{ flex: 2, backgroundColor: 'lightgray', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: 'white', paddingBottom: '1%', fontSize: 18, fontWeight: 'bold'}}>
                    Add Ingredients
                </Text>
                <TextInput
                    style={{height: 30, backgroundColor: 'white', width: '80%', borderRadius: 20, textAlign: 'center', marginVertical: '1%'}}
                    placeholder="Ingredient name"
                    onChangeText={nText => setName(nText)}
                    defaultValue={name}
                />
                <TextInput
                    style={{height: 30, backgroundColor: 'white', width: '80%', borderRadius: 20, textAlign: 'center', marginVertical: '1%'}}
                    placeholder="Quantity"
                    onChangeText={qText => setQuantity(qText)}
                    defaultValue={quantity}
                />
                <Button
                    onPress={()=>onSubmit()}
                    title="Add"
                    color="green"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default PantryScreen;