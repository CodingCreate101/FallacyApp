import React, { Component } from 'react'
import { Headline } from "react-native-paper";
import { StyleSheet, View, ScrollView } from "react-native";

class FallaciesList extends Component {
    state = {
        Quiiz: null
    }
    render() {
       
        return  <ScrollView>
                    <View style={styles.container}>
                        <Headline>
                            No Quizzes, yet.
                        </Headline>
                    </View>
                </ScrollView>
        
    }
}

export default FallaciesList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  