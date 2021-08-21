import React from 'react';
import {
    BookmarkIcon,
    CalendarIcon,
    HomeIcon,
} from 'react-native-heroicons/solid';
import { colors } from '../../colors';
import { BottomBarContainer } from './styles';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation: React.FC = () => {
    const navigation = useNavigation<any>();

    return (
        <BottomBarContainer>
            <CalendarIcon
                size={30}
                color={colors.button}
                onPress={() => navigation.navigate('Calendar', {})}
            />
            <HomeIcon
                size={30}
                color={colors.button}
                onPress={() => navigation.navigate('Home', {})}
            />
            <BookmarkIcon
                size={30}
                color={colors.button}
                onPress={() => console.log('Bookmark button pressed')}
            />
        </BottomBarContainer>
    );
};

export default BottomNavigation;
