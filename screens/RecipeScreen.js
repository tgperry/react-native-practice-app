import React, {useState, useEffect} from 'react';
import { View, Text, Button, Image, Modal, Pressable, StyleSheet, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import RecipeDataService from '../api/RecipeDataService';
import RecipeModal from '../components/RecipeModal';

const RecipeScreen = () => {
    const [dataSource, setDataSource] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [itemValue, setItemValue] = useState({});

    const ingredients = useSelector(state => state.ingredientsSlice.ingredients);
    const ingredientNames = ingredients.map(ingredient => ingredient.name)

    useEffect(() => {
        const fetchData = async () => { 
            const newData = await RecipeDataService.getRecipesFromIngredients(ingredientNames);
            //const newData = await RecipeDataService.getRequestTest(); //Use getRequestTest() to stop API calls to Spoonacular
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

    const activateModal = (item) => {
        setModalVisible(true);
        setItemValue(item);
    }

    const ItemView = (item, key) => {
        return (
            <View style={styles.itemViewOverall} key={key}>
                <Text style={styles.itemViewHeader}>
                    {item.title}
                </Text>
                <Image source={{uri: item.image}} style={styles.itemViewImage}/>
                <Pressable>
                    <Text style={styles.itemViewShowIngrText} onPress={()=>activateModal(item)}>
                        Show All Ingredients
                    </Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.centeredView}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Recipes
                </Text>
            </View>
            <View style={{flex: 8, justifyContent: 'center'}}>
                <ScrollView>
                    <RefreshControl
                        onRefresh={refresh}
                    />
                    <View style={styles.subHeader}>
                        <Text style={styles.subHeaderText}>
                            Below you will find recipes that are auto-generated from items in your pantry.
                        </Text>
                    </View>
                    {dataSource.map(ItemView)}
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={modalVisible}
                        onRequestClose={()=>setModalVisible(false)}
                    >
                        <RecipeModal recipeName={itemValue.title} usedIngredients={itemValue.usedIngredients} needIngredients={itemValue.missedIngredients}/>
                        <Pressable>
                            <Text style={styles.modalExit} onPress={()=>setModalVisible(false)}>
                                Exit
                            </Text>
                        </Pressable>
                    </Modal>
                </ScrollView>
            </View>
        </View>
    );
};

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
    subHeader: {
        backgroundColor: 'tomato', 
        alignItems: 'center', 
        marginBottom: '3%'
    },
    subHeaderText: {
        textAlign: 'center', 
        color: 'white', 
        fontSize: 15, 
        width: '75%', 
        paddingTop: '2%', 
        paddingBottom: '2%'
    },
    itemViewHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        maxWidth: '75%',
        paddingBottom: '2%'
    },
    itemViewOverall: {
        alignItems: 'center', 
        paddingBottom: '2%', 
        marginBottom: '2%'
    },
    itemViewImage: {
        width: 300, 
        height: 250, 
        borderRadius: 20, 
        overflow: 'hidden'
    },  
    itemViewShowIngrText: {
        marginTop: '2%',
        backgroundColor: 'tomato',
        padding: '2%',
        color: 'white',
        overflow: 'hidden',
        borderRadius: 12,
        borderColor: 'black'
    },
    modalExit: {
        alignSelf: 'center',
        width: '15%',
        textAlign: 'center',
        marginBottom: '10%',
        backgroundColor: 'green',
        padding: '2%',
        color: 'white',
        overflow: 'hidden',
        borderRadius: 12,
        borderColor: 'black'
    }
});

export default RecipeScreen;