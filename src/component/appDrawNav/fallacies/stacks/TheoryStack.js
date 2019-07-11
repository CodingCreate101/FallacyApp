import React, { Component } from 'react'
import { createStackNavigator } from "react-navigation";
import FallaciesList from '../screens/FallaciesList';
import Icon from "@expo/vector-icons/Ionicons";
import Fallacy from '../screens/Fallacy';


const TheoryStack = createStackNavigator({
    Theory: {
        screen: FallaciesList,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Fallacies',
                headerLeft: <Icon
                                onPress={navigation.openDrawer}
                                style={{paddingLeft: 20}}
                                name="md-menu" size={30}
                            />
            }
        }
    }
    ,
    Fallacy: {
        screen: Fallacy,
        navigationOptions: ({navigation}) => {
            console.log(navigation.state.params.item.title)
            const pageTitle = navigation.state.params.item.title.toUpperCase()
            return {
                headerTitle: pageTitle,
                headerStyles: {
                    textAlign: 'center',
                }
                // headerLeft: <Icon
                //                 onPress={navigation.openDrawer}
                //                 style={{paddingLeft: 20}}
                //                 name="md-menu" size={30}
                //             />
            }
        }
    }
})


export default TheoryStack