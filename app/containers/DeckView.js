import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container } from 'native-base';
import styled from 'styled-components'
import {blue, white} from '../utils/colors';

const DeckTitle = styled.Text`
	font-size: 40;
`;

const CardsNumber = styled.Text`
	font-size: 18;
	color: grey;
`;



class DeckView extends React.Component {
	render() {
		// const { title, cardsNumber,  } = this.props;
		return (
				<Container style={styles.deck}>
					<DeckTitle>udacicards</DeckTitle>
					<CardsNumber>2 cards</CardsNumber>
					<Container style={styles.actionsDeck}>
						<Button primary style={styles.actionButton}>
							<StartQuizText>Start quiz</StartQuizText>
						</Button>
						<Button bordered primary style={styles.actionButton}>
							<AddCardText>Add card</AddCardText>
						</Button>
					</Container>

				</Container>
		)
	}
}
const AddCardText = styled.Text`
     color: ${blue};
`;

const StartQuizText = styled.Text`
     color: ${white};
`;

const styles = StyleSheet.create({
	deck: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
    },
    actionsDeck: {
		marginTop: 24,
		justifyContent: 'center',
	},
	actionButton: {
		marginTop: 24,
		padding: 48,
	}
});

export default DeckView;