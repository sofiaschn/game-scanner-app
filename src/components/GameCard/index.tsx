import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { GameObject } from '../../interfaces/Game';
import {
    ButtonContainer,
    GameCardContainer,
    GameCardText,
    PlayText,
    SettingsContainer,
    TextContainer,
} from './styles';
import { AdjustmentsIcon } from 'react-native-heroicons/solid';
import { colors } from '../../colors';

const GameCard: React.FC<{ game: GameObject }> = ({ game }) => {
    const navigation = useNavigation<any>();

    return (
        <GameCardContainer>
            <SettingsContainer
                onPress={() => navigation.navigate('GameSettings', { game })}>
                <AdjustmentsIcon size={25} color={colors.button} />
            </SettingsContainer>
            <TextContainer>
                <GameCardText>{game.name}</GameCardText>
            </TextContainer>
            <ButtonContainer
                onPress={() => navigation.navigate('Game', { game })}>
                <PlayText>PLAY</PlayText>
            </ButtonContainer>
        </GameCardContainer>
    );
};

export default GameCard;
