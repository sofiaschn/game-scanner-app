import React from 'react';
import { HomeIcon, QrcodeIcon } from 'react-native-heroicons/solid';
import { colors } from '../../colors';
import { BottomBarContainer } from './styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const BottomNavigation: React.FC = () => {
    const navigation = useNavigation<any>();

    return (
        <BottomBarContainer>
            <TouchableOpacity onPress={() => navigation.navigate('Home', {})}>
                <HomeIcon size={30} color={colors.button} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('QRCode', {})}>
                <QrcodeIcon size={30} color={colors.button} />
            </TouchableOpacity>
        </BottomBarContainer>
    );
};

export default BottomNavigation;
