import styled from 'styled-components/native';
import { colors } from '../../colors';

export const GameCardContainer = styled.View`
    background-color: ${colors.secondary};
    height: 100px;
    width: 93%;
    margin: 3%;
    flex: 1;
    flex-direction: row;
    border-radius: 10px;
    overflow: hidden;
    justify-content: space-between;
`;

export const SettingsContainer = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    margin-left: 3%;
`;

export const TextContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: 6%;
    flex: 1;
`;

export const GameCardText = styled.Text`
    color: white;
    font-size: 25px;
`;

export const ButtonContainer = styled.TouchableOpacity`
    width: 30%;
    background-color: green;
    align-items: center;
    justify-content: center;
`;

export const PlayText = styled.Text`
    color: white;
    font-size: 20px;
`;
