import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import { setIngredients } from '../store/slices/IngredientSlice';

function InputForm() {
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
        <View style={styles.centeredView}>
            <Text style={styles.header}>
                Add Ingredients
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder="Ingredient name"
                onChangeText={nText => setName(nText)}
                defaultValue={name}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Quantity"
                onChangeText={qText => setQuantity(qText)}
                defaultValue={quantity}
            />
            <TouchableOpacity onPress={onSubmit} style={{marginTop: '2%'}}>
                <Text style={styles.addButton}>
                    Add
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1, 
        backgroundColor: 'lightgray', 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    header: {
        color: 'white', 
        paddingBottom: '1%', 
        fontSize: 18, 
        fontWeight: 'bold'
    },
    textInput: {
        height: 30, 
        backgroundColor: 'white', 
        width: '80%', 
        borderRadius: 20, 
        textAlign: 'center', 
        marginVertical: '1%'
    },  
    addButton: {
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: 'green',
        paddingHorizontal: '2%',
        paddingVertical: '1%',
        color: 'white',
        overflow: 'hidden',
        borderRadius: 10,
        borderColor: 'black'
    }
});

export default InputForm;