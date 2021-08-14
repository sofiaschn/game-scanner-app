import React from 'react';
import {
  BookmarkIcon,
  CalendarIcon,
  HomeIcon,
} from 'react-native-heroicons/solid';
import { colors } from '../../colors';
import { NavigationContainer } from './styles';

const BottomNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <CalendarIcon
        size={30}
        color={colors.button}
        onPress={() => console.log('Calendar button pressed')}
      />
      <HomeIcon
        size={30}
        color={colors.button}
        onPress={() => console.log('Home button pressed')}
      />
      <BookmarkIcon
        size={30}
        color={colors.button}
        onPress={() => console.log('Bookmark button pressed')}
      />
    </NavigationContainer>
  );
};

export default BottomNavigation;
