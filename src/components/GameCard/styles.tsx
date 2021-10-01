import styled from 'styled-components/native';
import { colors } from '../../colors';

export const GameCardContainer = styled.View`
    background-color: ${colors.secondary};
    height: 100px;
    width: 93%;
    margin: 3%;
    flex: 1;
    flex-direction: row;
`;

export const TextContainer = styled.View`
    width: 70%;
    height: 100%;
    flex-direction: row;
    background-color: white;
    align-items: center;
    justify-content: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
    width: 30%;
    height: 100%;
    background-color: green;
    align-items: center;
    justify-content: center;
`;

export const PlayText = styled.Text`
    color: white;
`;
