import styled from 'styled-components/native';
import { colors } from '../../colors';

export const ModalTapDetection = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.View`
    background-color: ${colors.secondary};
    height: 30%;
    width: 60%;
    border-radius: 10px;
    overflow: hidden;
    justify-content: space-around;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 5%;
`;

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
`;

export const ModalText = styled.Text`
    color: white;
    font-size: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-left: 10%;
    padding-right: 10%;
`;
