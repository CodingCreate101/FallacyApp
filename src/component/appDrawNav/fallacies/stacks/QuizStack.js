import React, { Component } from 'react'
import { createStackNavigator } from "react-navigation";
import QuizList from '../screens/QuizList';
import Icon from "@expo/vector-icons/Ionicons";


const QuizStack = createStackNavigator({
    Quiz: {
        screen: QuizList,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Quiz',
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


export default QuizStack