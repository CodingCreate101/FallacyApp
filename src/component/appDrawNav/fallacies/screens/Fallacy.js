import React, { Component } from 'react'
import { View } from "react-native";
import { Headline, Paragraph } from 'react-native-paper';
import { Surface, Text } from 'react-native-paper';
import { StyleSheet, Clipboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Font } from 'expo'
import { Snackbar } from 'react-native-paper';

class Fallacy extends Component {

    async componentWillMount() {
        await Font.loadAsync({
            thin: require('../../../../../assets/Fonts/Poppins-Thin.ttf'),
            BoldItalic: require('../../../../../assets/Fonts/Poppins-ExtraBoldItalic.ttf'),
            Light: require('../../../../../assets/Fonts/Poppins-Light.ttf'),
            Bold: require('../../../../../assets/Fonts/Poppins-Bold.ttf'),
            Regular: require('../../../../../assets/Fonts/Poppins-Regular.ttf'),
        })
        this.setState({ fontLoaded: true })
      }
    state = {
        title: "---",
        description: "---",
        detail: "---",
        example: "---",
        fontLoaded: false,
        visible: false,
    }

    componentDidMount = () => {
        let fal = this.props.navigation.getParam('item');

        this.setState({
            ...this.state,
            title: fal.title,
            description: fal.description,
            detail: fal.detail,
            example: fal.example
        })
    }
    set_Text_Into_Clipboard = async (copyThis) => {
        
        await Clipboard.setString(copyThis);
        
    }
    
    showSnackBar = (duration) => {
        this.setState(state => ({ visible: !state.visible }))

        setTimeout(() => {
            this.setState(state => ({ visible: !state.visible }))
        }, duration)

      }

    copyIt = (copyThis) => {
        this.set_Text_Into_Clipboard(copyThis)
        .then(() => {
            this.showSnackBar(700);
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        if(this.state.fontLoaded) {

            return (
                    <View style={styles.view}>
                <ScrollView >

                    <Surface style={styles.surface}>
                        <Text style={styles.heading} >{ this.state.title }</Text>
                    </Surface>

                    <View style={styles.textContainer}>

                        <Text style={styles.titles}>
                            Description:
                        </Text>
                        <Paragraph
                        onPress={() => this.copyIt(this.state.description)}
                        style={styles.description}>
                            { this.state.description }
                        </Paragraph>

                        <Text style={styles.titles}>
                            Details:
                        </Text>
                        <Paragraph
                            onPress={() => this.copyIt(this.state.details)}
                            style={styles.details}
                        >
                            { this.state.detail }
                        </Paragraph>

                        <Text style={styles.titles}>
                            Example:
                        </Text>

                        <Paragraph
                            onPress={() => this.copyIt(this.state.example)}
                            style={styles.example}
                        >
                            { this.state.example }
                        </Paragraph>
                        
                        <View style={styles.emptySpace}></View>
                    </View>
                </ScrollView>
                <Snackbar style={styles.snackBar} visible={this.state.visible} >
                   Coplied!
                </Snackbar>
                <Text style={styles.bottomText}>Tap on any text block to copy.</Text>
                </View>
            )
        } else {
            return <View><Text>Loading...</Text></View>
        }
    }
}

export default Fallacy;


const styles = StyleSheet.create({
    surface: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
    },
    heading: {
        fontFamily: 'thin',
        textAlign: 'center',
        textTransform: "uppercase",
        padding: 8,
        fontWeight: '100',
        fontSize: 60,
        lineHeight: 55,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 7
    },
    view: {
        height: '100%'
    },
    description: {
        fontFamily: 'BoldItalic',
        // fontFamily: 'Bold',
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center'
    },
    textContainer: {
        marginRight: 20,
        marginLeft: 20,
        
    },
    titles: {
        fontSize: 20,
        fontFamily: 'Bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 20,
    },
    details: {
        textAlign: 'justify',
        fontSize: 18,
        fontFamily: 'Roboto',
        letterSpacing: 0,
        lineHeight: 28
    },
    example: {
        textAlign: 'justify',
        fontSize: 18,
        fontFamily: 'Roboto',
        letterSpacing: 0,
        lineHeight: 20
    },
    emptySpace: {
        height: 50
    },
    snackBar: {
        textAlign: 'center',
        bottom: 5,
        width: '30%',
    },
    bottomText: {
        textAlign: "right",
        fontSize: 7,
        backgroundColor: "#333333",
        color: '#777',
    },
   
  });