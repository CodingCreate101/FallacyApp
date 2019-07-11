import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import StackNav from './src/component/appDrawNav/fallacies/stacks/StackNav';

class App extends Component {
    render () {
        return <AppContainer />
    }
}
export default App;

const AppDrawNav = createDrawerNavigator({
    Fallacies: {
        screen: StackNav
    }
    // ,
    // Biases: {
    //     screen: StackNav
    // },
    // "Human Complexes": {
    //     screen: StackNav
    // }
})

const AppSwitchNavigator = createSwitchNavigator({
    welcome: {screen: AppDrawNav}
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


