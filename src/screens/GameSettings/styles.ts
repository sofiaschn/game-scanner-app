import styled from 'styled-components/native';
import { colors } from '../../colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.primary};
`;

export const SettingsContainer = styled.View`
    flex: 1;
    align-items: center;
    padding: 5%;
`;

export const ButtonContainer = styled.View`
    height: 15%;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
`;

export const DeleteButton = styled.TouchableOpacity`
    height: 40%;
    width: 80%;
    background-color: ${colors.red};
    border-radius: 3px;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: ${colors.text};
    font-size: 20px;
`;

export const Settings = styled.View`
    width: 100%;
    background-color: ${colors.secondary};
    border-radius: 10px;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
    padding-bottom: 5%;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    font-size: 25px;
    width: 80%;
    text-align: center;
    border-bottom-color: ${colors.text};
    border-bottom-width: 1px;
`;

export const PropertyContainer = styled.View`
    width: 100%;
    align-items: center;
    padding-bottom: 10%;
`;

export const SaveButton = styled.TouchableOpacity`
    height: 100%;
    width: 100%;
    background-color: ${colors.blue};
    border-radius: 3px;
    align-items: center;
    justify-content: center;
`;
