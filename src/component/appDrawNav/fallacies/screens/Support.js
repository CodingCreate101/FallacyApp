import React, { Component } from 'react'
import { Headline } from "react-native-paper";
import { StyleSheet, View, ScrollView } from "react-native";

class Support extends Component {
    state = {
        Support: null
    }
    render() {
       
        return  <ScrollView>
                    <View style={styles.container}>
                        <Headline>
                            Coming soon..
                        </Headline>
                    </View>
                </ScrollView>
        
    }
}

export default Support;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  