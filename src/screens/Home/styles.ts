import styled from 'styled-components/native';
import { colors } from '../../colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.primary};
`;

export const InformationContainer = styled.ScrollView.attrs({
    contentContainerStyle: {
        alignItems: 'center',
    },
})`
    margin: 1%;
`;
