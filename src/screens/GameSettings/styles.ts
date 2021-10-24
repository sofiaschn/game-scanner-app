import styled from 'styled-components/native';
import { colors } from '../../colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.primary};
`;

export const SettingsContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

export const DeleteContainer = styled.View`
    height: 15%;
    align-items: center;
    justify-content: center;
`;

export const DeleteButton = styled.TouchableOpacity`
    height: 40%;
    width: 80%;
    background-color: ${colors.red};
    border-radius: 3px;
    align-items: center;
    justify-content: center;
`;

export const DeleteText = styled.Text`
    color: ${colors.text};
    font-size: 20px;
`;
