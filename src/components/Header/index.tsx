import React from 'react';
import { MenuIcon } from 'react-native-heroicons/solid';
import { colors } from '../../colors';
import { HeaderContainer, HeaderMenuContainer, HeaderText } from './styles';

const Header: React.FC<{ text?: string }> = ({ text }) => {
  return (
    <HeaderContainer>
      <HeaderMenuContainer>
        <MenuIcon
          size={30}
          color={colors.button}
          onPress={() => console.log('Menu button pressed')}
        />
      </HeaderMenuContainer>
      <HeaderText>{text}</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
