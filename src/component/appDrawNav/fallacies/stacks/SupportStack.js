import React, { Component } from 'react'
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import QuizList from '../screens/QuizList';
import Icon from "@expo/vector-icons/Ionicons";
import Fallacy from '../screens/Fallacy';
import Support from '../screens/Support';


const SupportStack = createStackNavigator({
    Support: {
        screen: Support,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Support',
                headerLeft: <Icon
                                onPress={navigation.openDrawer}
                                style={{paddingLeft: 20}}
                                name="md-menu" size={30}
                            />
            }
        }
    }
    // ,
    // SingleQuiz: {
    //     screen: Fallacy
    // }
})


export default SupportStack