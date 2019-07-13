import React, { Component } from 'react'
import { List, Colors } from "react-native-paper";
import { ScrollView } from "react-native";
import { StyleSheet } from 'react-native';

class FallaciesList extends Component {
    state = {
        Fallacies: [
            {
                id: 1,
                title: "Red Herring",
                description: "Derailing an argument with an irrelevant topic/argument.",
                detail: "A Red Herring is a fallacy in which an irrelevant topic is presented in order to divert attention from the original issue. The basic idea is to 'win' an argument by leading attention away from the argument and to another topic. This is one of the most common fallacy of all.",
                example: "Topic A is under discussion. Topic B is introduced under the guise of being relevant to topic A (when topic B is actually not relevant to topic A). Topic A is abandoned."
            },
            {
                id: 2,
                title: "Straw man",
                description: "Misrepresenting someone's argument to make it easier to attack.",
                detail: "The Straw Man fallacy is committed when a person simply ignores a person's actual position and substitutes a distorted, exaggerated or misrepresented version of that position.",
                example: "Person P presents argument X, Person Q modifies X(willingly or unwindly) to simple, easier, distorted version Y(a substitute/strawman/fake) argument of X and attacks Y. Once Y is refuted, attack on strawman is complete and hence strawman fallacy."
            },
            {
                id: 3,
                title: "Ad Hominem",
                description: "Attacking opponent's character or personal traits in an attempt to undermine their argument.",
                detail: 'Translated from Latin to English, "Ad Hominem" means "against the man" or "against the person." An Ad Hominem is a general category of fallacies in which a claim or argument is rejected on the basis of some irrelevant fact about the author of or the person presenting the claim or argument. Typically, this fallacy involves two steps. First, an attack against the character of person making the claim, her circumstances, or her actions is made (or the character, circumstances, or actions of the person reporting the claim). Second, this attack is taken to be evidence against the claim or argument the person in question is making (or presenting).',
                example: "Person P presents argument X. Person Q attacks person P . Person Q concludes argument X is refuted."
            },
            {
                id: 4,
                title: "Special Pleading",
                description: "Moving the goalposts or making up exceptions when a claim is shown to be false.",
                detail: "Special Pleading is a fallacy in which a person applies standard principles, rules, etc. to other similar subjects but while taking themselves (or those they have a special interest in) to be exempt, without providing adequate justification for the exemption.",
                example: "Person P advocates Standard M for Circumstance/Situation S. When person P is in S, P concludes/claims M is not applicable anymore for P's case without consistent reasoning."
            },
            {
                id: 5,
                title: "Loaded question",
                description: "Asking a question that has an assumption built into it so that it cannot be answered without appearing guilty.",
                detail: "Loaded question fallacies are particularly effective at derailing rational debates because of their inflammatory nature - recipients of a loaded question are compelled to defend themselves and may appear flustered or on the back foot.",
                example: 'Person P asks question A to person Q. Question A has an assumption X which is not true. With that, person Q was made to answer WITH that assumption. Such as: "Have you stopped beating your mother?"'
            },
            {
                id: 6,
                title: "Appeal to Popularity",
                description: "The claim where the fact that many people do or agree on something is a proof of it's validity is appeal to popularity fallacy.",
                detail: "The basic idea is that a claim is accepted as being true simply because most people are favorably inclined towards that claim. Question: Is democracy a fallacy?",
                example: "Most people are in agreement with X, therefore X must be true."
            },
            {
                id:7,
                title: "Appeal to Authority",
                description: "Assumption that because an authority thinks something is true, it must therefore be true.",
                detail: "It should be noted that even a good Appeal to Authority is not an exceptionally strong argument. After all, in such cases a claim is being accepted as true simply because a person is asserting that it is true. The person may be an expert, but her expertise does not really bear on the truth of the claim. This is because the expertise of a person does not actually determine whether the claim is true or false. Hence, arguments that deal directly with evidence relating to the claim itself will tend to be stronger.",
                example: "Person P is an authority on subject S. P makes a claim C on S. Therefore C must be true."
            },
            {
                id: 8,
                title: "Black and white",
                description: "Where two alternative states are presented as the only possibilities when in fact more possibilities exist.",
                detail: 'This line of "reasoning" is fallacious because if both claims could be false, then it cannot be inferred that one is true because the other is false',
                example: "It is inferred that either claim X is true or claim Y is true (even when X and Y could both be false). Because claim Y is false or can not be true, claim X must be true."
            },
            {
                id: 9,
                title: "Begging the Question",
                description: "A circular argument in which the conclusion is included in the premise.",
                detail: "Begging the Question is a fallacy in which the premises include the claim that the conclusion is true or (directly or indirectly) assume that the conclusion is true.",
                example: "Person P: Claim X is true. Person Q: Why? Person P: Because of claim Y. Person Q: Why claim Y is true? Person P: Because claim X is true."
            },
            {
                id: 10,
                title: "Appeal to Nature",
                description: "Making the argument that because something is ‘natural’ it is therefore valid, justified, inevitable, good, or ideal.",
                detail: 'An argument appeals to nature when it claims that something is good because it\'s natural, or bad because it\'s unnatural. What is logically wrong with such arguments? One difficulty is that the concept of the natural is vague and ambiguous. For instance, is the human use of fire "natural"? Maybe, maybe not. Is it "natural" for people to wear clothes? Yes and no. This means that people can pick and choose what they wish to praise as "natural" or condemn as "unnatural".',
                example: "X is natural. Therefore, X is right or good. Y is unnatural. Therefore, Y is wrong or bad."
            },
            {
                id: 11,
                title: "Composition",
                description: "Assuming that what’s true about part/parts of something is true for the whole thing.",
                detail: "The fallacy of Composition is committed when a conclusion is drawn about a whole based on the features of its part/parts when, in fact, no justification provided for the inference.",
                example: "Thing A has 5 parts, P, Q, R, S, T. (1) If claim X is true for P and Q, it must be true for R, S and T, too. (2) If X is true for P, and Q, it must be true for A as a whole."
            },
            {
                id:12,
                title: "Division",
                description: "Assuming that what's true about a whole is true for its part/parts.",
                detail: "The Fallacy of Division is committed when a conclusion is drawn about part/parts of something based on the features of it as a whole when, in fact, no justification provided for the inference.",
                example: "Thing A has 5 parts, P, Q, R, S, T. If claim X is true for A, then claim X must also be true for its parts, P, Q, R, S, and T."
            },
            {
                id: 13,
                title: "Anecdotal",
                description: "Using personal experience or an isolated example instead of a valid argument, especially to dismiss statistics.",
                detail: "The Anecdotal Fallacy is committed when a recent memory, a striking anecdote, or a news story of an unusual event leads one to overestimate the probability of that type of event, especially when one has access to better evidence. In other words, the mistake is to allow the emotional effects of a vivid memory or story to outweigh stronger evidence, such as statistics, on the frequency of such events.",
                example: "Person P claims X is true based on statistical data. Person Q claims X isn't true in his/her own experience. Therefore X is not true."
            },
            {
                id: 14,
                title: "Appeal to emotions",
                description: "Manipulating an emotional response in place of a valid or compelling argument.",
                detail: "This fallacy is committed when someone manipulates peoples' emotions in order to get them to accept a claim as being true. More formally, this sort of \"reasoning\" involves the substitution of various means of producing strong emotions in place of evidence for a claim. If the favorable emotions associated with X influence the person to accept X as true because they \"feel good about X,\" then he has fallen prey to the fallacy.",
                example: "Favorable emotions are associated with X. Therefore, X is true."
            },
            {
                id: 15,
                title: "Tu Quoque",
                description: "Avoiding having to engage with criticism by turning it back on the accuser - answering criticism with criticism.",
                detail: "Tu Quoque is a very common fallacy in which one attempts to defend oneself or another from criticism by turning the critique back against the accuser. This is a classic Red Herring fallacy since whether the accuser is guilty of the same, or a similar, wrong is irrelevant to the truth of the original charge. However, as a diversionary tactic, Tu Quoque can be very effective, since the accuser is put on the defensive, and frequently feels compelled to defend against the accusation. It's also known as 'You too' fallacy.",
                example: "Person P makes claim X. Person P asserts that P's actions or past claims are inconsistent with the truth of claim X. Therefore X is false."
            },
            {
                id: 16,
                title: "Burden of Proof",
                description: "Saying that the burden of proof lies not with the person making the claim, but with someone else to disprove it.",
                detail: "Burden of Proof is a fallacy in which the burden of proof is placed on the wrong side. Another version occurs when a lack of evidence for side A is taken to be evidence for side B in cases in which the burden of proof actually rests on side B. A common name for this is an Appeal to Ignorance.",
                example: "Both are examples of this fallacy: (1) Claim X is presented by side A and the burden of proof actually rests on side B. (2) Side B claims that X is false because there is no proof for X."
            },
            {
                id: 17,
                title: "No-True-Scotsman",
                description: "Making what could be called an appeal to purity as a way to dismiss relevant criticisms or flaws of an argument.",
                detail: 'The "no-true-Scotsman" type of redefinition usually occurs in the course of an argument or debate among two or more people. As in the case of the infamous Scotsman, an arguer makes a universal claim, such as "all swans are white" or "no swans are black". When an opponent points out that there are black swans in Australia, the arguer revises the claim to "all true swans are white" or "no real swans are black". This seems to save the arguer\'s claims from refutation by redefining "swan" to include whiteness and exclude blackness.',
                example: 'The claim that "all swans are white" is an interesting, substantive, but false claim about the world. In contrast, the claim that "all true swans are white" is no more substantive than the claim that "all white swans are white". In other words, the no-true-Scotsman move or ploy gains truth at the cost of informativeness. The redefinition that results is true by definition, and therefore tells us only about the arguer\'s use of the word "swan", rather than about actual swans.'
            },
            {
                id: 18,
                title: "Texas Sharpshooter",
                description: "Cherry-picking data clusters to suit an argument, or finding a pattern to fit a presumption.",
                detail: "This fallacy occurs when someone jumps to the conclusion that a cluster in some data must be the result of a cause, usually one that it is clustered around.",
                example: "The Texas sharpshooter is a fabled marksman who fires his gun randomly at the side of a barn, then paints a bullseye around the spot where the most bullet holes cluster. The story of this Lone Star state shooter has given its name to a fallacy apparently first described in the field of epidemiology, which studies how disease spreads in a population."
            },
            {
                id: 19,
                title: "Fallacy Fallacy",
                description: "Presuming a claim to be necessarily wrong because a fallacy has been committed.",
                detail: "Like anything else, the concept of logical fallacy can be misunderstood and misused, and can even become a source of fallacious reasoning. To say that an argument is fallacious is, among other things, to claim that there is not a sufficiently strong logical connection between the premisses and the conclusion. This says nothing about the truth or falsity of the conclusion, so it is unwarranted to conclude that it's false simply because some argument for it is fallacious.",
                example: "Argument A for the conclusion C is fallacious. Therefore, C is false."
            },
            {
                id: 20,
                title: "Personal incredulity",
                description: "Saying that because one finds something difficult to understand, it’s therefore not true.",
                detail: "Subjects such as biological evolution via the process of natural selection require a good amount of understanding before one is able to properly grasp them; this fallacy is usually used in place of that understanding.",
                example: "Claim X is hard to understand. Therefore X is not true."
            },
            {
                id: 21,
                title: "Ambiguity",
                description: "Using double meanings or ambiguities of language to mislead or misrepresent the truth.",
                detail: "As a logical fallacy, ambiguity occurs when linguistic ambiguity causes an argument to appear cogent when it is not. This can happen when an ambiguous word or phrase occurs more than once in an argument and has different meanings in two or more occurrences.",
                example: "When the judge asked the defendant why he hadn't paid his parking fines, he said that he shouldn't have to pay them because the sign said 'Fine for parking here' and so he naturally presumed that it would be fine to park there."
            },
            {
                id: 22,
                title: "Genetic",
                description: "Judging something good or bad on the basis of where it comes from, or from whom it comes.",
                detail: 'A Genetic Fallacy is a line of "reasoning" in which a perceived defect in the origin of a claim or thing is taken to be evidence that discredits the claim or thing itself. It is also a line of reasoning in which the origin of a claim or thing is taken to be evidence for the claim or thing.',
                example: "The origin of a claim or thing is presented. The claim is true(or false) or the thing is supported (or discredited) based on the origin of the claim."
            },
            {
                id: 23,
                title: "Middle Ground",
                description: "Saying that a compromise, or middle point, between two extremes must be the truth.",
                detail: "This fallacy is committed when it is assumed that the middle position between two extremes must be correct simply because it is the middle position.",
                example: "Position A and B are two extreme positions. C is a position that rests in the middle between A and B. Therefore C is the correct position. Person A said that vaccinations caused autism in children, but her scientifically well-read friend B said that this claim had been debunked and proven false. Their friend C offered a compromise that vaccinations cause some autism."
            },
            {
                id: 24,
                title: "Appeal to Belief",
                description: "Claim that something is true because it is simply believed to be true.",
                detail: 'This line of "reasoning" is fallacious because the fact that many people believe a claim does not, in general, serve as evidence that the claim is true.',
                example: "People believe that a claim, X, is true. Therefore X is true."
            },
            {
                id: 25,
                title: "Appeal to Common Practice",
                description: "Claiming something is true/correct because that's how most people do it.",
                detail: 'The basic idea behind the fallacy is that the fact that most people do X is used as "evidence" to support the action or practice. It is a fallacy because the mere fact that most people do something does not make it correct, moral, justified or reasonable.',
                example: "X is a common action. Therefore X is correct/moral/justified/reasonable, etc."
            },
            {
                id: 26,
                title: "Appeal to Tradition",
                description: "Something is true or correct only because it has been accepted correct for a long time.",
                detail: 'Appeal to Tradition is a fallacy that occurs when it is assumed that something is better or correct simply because it is older, traditional, or "always has been done."',
                example: "X is old or traditional. Therefore X is correct or better."
            },
            // {
            //     id: 0,
            //     title: "Empty",
            //     description: "Empty",
            //     detail: "Empty",
            //     example: "Empty"
            // }
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