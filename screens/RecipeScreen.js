import React, {useState, useEffect} from 'react';
import { View, Text, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import RecipeDataService from '../api/RecipeDataService';

const RecipeScreen = (props) => {
    const [dataSource, setDataSource] = useState([]);
    const ingredients = useSelector(state => state.ingredientsSlice.ingredients);
    const ingredientNames = ingredients.map(ingredient => ingredient.name)

    useEffect(() => {
        const fetchData = async () => { 
            console.log(ingredientNames)
            const newData = await RecipeDataService.getRecipesFromIngredients(ingredientNames);
            //const newData = await RecipeDataService.getRequestTest();
            if(newData!==undefined) {
                setDataSource(newData);
            }
        }
        fetchData();
    }, []);

    const refresh = async () => {
        const newData = await RecipeDataService.getRecipesFromIngredients(ingredientNames);
        if(newData!==undefined) {
            setDataSource(newData);
        }
    }

    const ItemView = (item, key) => {
        return (
            <View style={{alignItems: 'center', paddingBottom: '2%', marginBottom: '2%'}} key={key}>
                <Text style={{fontWeight: 'bold'}}>
                    {item.title}
                </Text>
                <Image source={{uri: item.image}} style={{width: 200, height: 200}}/>
            </View>
        )
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: '10%', backgroundColor: 'tomato', width: '100%', height: '10%'}}>
                <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center', maxWidth: '80%', color: 'ivory'}}>
                    Recipes
                </Text>
            </View>
            <View style={{flex: 8, justifyContent: 'center'}}>
                <ScrollView>
                    <View style={{backgroundColor: 'tomato', alignItems: 'center', marginBottom: '3%'}}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 15, width: '75%', paddingTop: '2%', paddingBottom: '2%'}}>
                            Below you will find recipes that are auto-generated from items in your pantry.
                        </Text>
                    </View>
                    {dataSource.map(ItemView)}
                </ScrollView>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button
                    onPress={()=>refresh()}
                    title="Refresh"
                    color="green"
                />
            </View>
        </View>
    );
};

export default RecipeScreen;