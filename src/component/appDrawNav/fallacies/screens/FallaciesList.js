import React, { Component } from 'react'
import { List, Colors } from "react-native-paper";
import { ScrollView } from "react-native";
import { StyleSheet } from 'react-native';

class FallaciesList extends Component {
    state = {
        Fallacies: [
            {
                title: "Ad Hominem",
                description: "You attacked your opponent's character or personal traits in an attempt to undermine their argument.",
                detail: "Ad hominem attacks can take the form of overtly attacking somebody, or more subtly casting doubt on their character or personal attributes as a way to discredit their argument. The result of an ad hom attack can be to undermine someone's case without actually having to engage with it.",
                example: "After Sally presents an eloquent and compelling case for a more equitable taxation system, Sam asks the audience whether we should believe anything from a woman who isn't married, was once arrested, and smells a bit weird."
            },
            {
                title: "Tu Quoque",
                description: "You avoided having to engage with criticism by turning it back on the accuser - you answered criticism with criticism.",
                detail: "Pronounced too-kwo-kwee. Literally translating as 'you too' this fallacy is also known as the appeal to hypocrisy. It is commonly employed as an effective red herring because it takes the heat off someone having to defend their argument, and instead shifts the focus back on to the person making the criticism.",
                example: "Nicole identified that Hannah had committed a logical fallacy, but instead of addressing the substance of her claim, Hannah accused Nicole of committing a fallacy earlier on in the conversation."
            },
            {
                title: "Personal Incredulity",
                description: "Because you found something difficult to understand, or are unaware of how it works, you made out like it's probably not true.",
                detail: "Complex subjects like biological evolution through natural selection require some amount of understanding before one is able to make an informed judgement about the subject at hand; this fallacy is usually used in place of that understanding.",
                example: "Kirk drew a picture of a fish and a human and with effusive disdain asked Richard if he really thought we were stupid enough to believe that a fish somehow turned into a human through just, like, random things happening over time."
            },
            {
                title: "Special Pleading",
                description: "You moved the goalposts or made up an exception when your claim was shown to be false.",
                detail: "Humans are funny creatures and have a foolish aversion to being wrong. Rather than appreciate the benefits of being able to change one's mind through better understanding, many will invent ways to cling to old beliefs. One of the most common ways that people do this is to post-rationalize a reason why what they thought to be true must remain to be true. It's usually very easy to find a reason to believe something that suits us, and it requires integrity and genuine honesty with oneself to examine one's own beliefs and motivations without falling into the trap of justifying our existing ways of seeing ourselves and the world around us.",
                example: "Edward Johns claimed to be psychic, but when his 'abilities' were tested under proper scientific conditions, they magically disappeared. Edward explained this saying that one had to have faith in his abilities for them to work."
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            },
            {
                title: "Empty",
                description: "Empty",
                detail: "Empty",
                example: "Empty"
            }
        ]
    }
    render() {
        let fList = this.state.Fallacies.map((item, index) => {
            return <List.Item
                        title={item.title}
                        // style={styles.listStyle}
                        titleStyle={styles.listStyle}
                        onPress={() => this.props.navigation.navigate('Fallacy', {item})}
                        key={index}
                        left={props => <List.Icon color="#000000" {...props} icon="album" />}
                        />
        })
        return  <ScrollView>
                    { fList }
                </ScrollView>
        
    }
}


export default FallaciesList;



const styles = StyleSheet.create({
    listStyle: {
        color: '#000000',
        fontSize: 20
    }
  });