import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ListIngredients from '../components/ListIngredients';
import InputForm from '../components/InputForm';

function PantryScreen() {
    return (
        <View style={styles.centeredView}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Pantry
                </Text>
            </View>
            <View style={{ flex: 6, width: '100%'}}>
                <ListIngredients/>
            </View>
            <View style={{ flex: 2, width: '100%'}}>
                <InputForm/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%', 
        backgroundColor: 'tomato', 
        width: '100%', 
        height: '10%',
        flex: 1
    },
    headerText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center', 
        maxWidth: '80%', 
        color: 'ivory'
    },
});

export default PantryScreen;