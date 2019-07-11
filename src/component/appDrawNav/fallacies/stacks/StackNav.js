import { createStackNavigator } from "react-navigation";
import TheoryStack from "./TheoryStack";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import QuizStack from "./QuizStack";
// import SupportStack from "./SupportStack";

const BottomTabNav = createMaterialBottomTabNavigator({
  Fallacies: { screen: TheoryStack },
    Quiz: { screen: QuizStack },
    // Support: { screen: SupportStack },
  }
  , {
        navigationOptions: () => {
        return {
                    header: null
                };
        },
        initialRouteName: 'Fallacies',
        activeColor: '#FFFFFF',
        barStyle: {
          backgroundColor: '#333333',
          // marginBottom: 10,
          padding:10,
          marginVertical: 0,
          paddingVertical: 0,
          paddingTop: 0,
          paddingBottom: 15,
        }
  }
  );

const StackNav = createStackNavigator({
    BottomTabNav
})


export default StackNav;