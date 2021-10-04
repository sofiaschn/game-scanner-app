import styled from 'styled-components/native';

export const ModalContainer = styled.View`
    background-color: white;
    flex: 1;
    height: 30%;
    width: 60%;
    border-radius: 5px;
    overflow: hidden;
    justify-content: space-around;
    position: absolute;
    align-self: center;
    top: 35%;
`;

export const TextContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
    width: 30%;
    background-color: green;
    align-items: center;
    justify-content: center;
`;

export const ModalText = styled.Text`
    color: black;
    font-size: 20px;
`;
