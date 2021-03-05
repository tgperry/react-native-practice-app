import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import { setIngredients } from '../store/slices/IngredientSlice';

function InputForm() {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const dispatch = useDispatch();

    const onSubmit = () => {
        if (!name) {
            alert('Please add an ingredient name')
            return
        }
        if (!quantity) {
            setQuantity('1')
        }

        const ingredient = {
            name: name,
            quantity: quantity
        }

        dispatch(setIngredients(ingredient));

        setName('')
        setQuantity('')
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.centeredView}>
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
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1, 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    header: {
        color: 'black', 
        paddingBottom: '1%', 
        fontSize: 18, 
        fontWeight: 'bold'
    },
    textInput: {
        height: 25, 
        backgroundColor: 'white', 
        width: '80%', 
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black', 
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