import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function RecipeModal(props) {
    const ItemView = (item, key) => {
        return (
            <View style={styles.itemViewOverall} key={key}>
                <Text style={{textAlign: 'center'}}>
                    {item.original}
                </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.centeredView}>
            <ScrollView>
                <Text style={styles.recipeHeader}>{props.recipeName}</Text>
                <Text style={styles.ingredientsHeader}>Ingredients You Have:</Text>
                    {props.usedIngredients.map(ItemView)}
                <Text style={styles.ingredientsHeader}>Ingredients You Do Not Have:</Text>
                    {props.needIngredients.map(ItemView)}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        maxWidth: '80%'
    },
    recipeHeader: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        paddingBottom: '2%',
        marginTop: '5%'
    },  
    itemViewOverall: {
        alignItems: 'center', 
        paddingBottom: '2%', 
        marginBottom: '2%'
    },
    ingredientsHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '5%'
    }
});

export default RecipeModal;