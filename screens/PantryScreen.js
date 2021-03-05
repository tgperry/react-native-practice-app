import React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

import ListIngredients from '../components/ListIngredients';
import InputForm from '../components/InputForm';

function PantryScreen() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 30 : 0
    
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
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 2, width: '100%'}} keyboardVerticalOffset={keyboardVerticalOffset}>
                <InputForm/>
            </KeyboardAvoidingView>
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