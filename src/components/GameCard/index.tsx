import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { GameObject } from '../../interfaces/GameObject';
import {
    ButtonContainer,
    GameCardContainer,
    PlayText,
    TextContainer,
} from './styles';

const GameCard: React.FC<{ game: GameObject }> = ({ game }) => {
    const navigation = useNavigation<any>();

    return (
        <GameCardContainer>
            <TextContainer>
                <Text>{game.name}</Text>
            </TextContainer>
            <ButtonContainer
                onPress={() => navigation.navigate('Game', { game })}>
                <PlayText>PLAY</PlayText>
            </ButtonContainer>
        </GameCardContainer>
    );
};

export default GameCard;
