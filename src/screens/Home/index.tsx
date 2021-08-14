import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from '../../components/BottomNavigation';
import Header from '../../components/Header';
import { Container, InformationContainer } from './styles';

const homeScreen = () => {
  return (
    <NavigationContainer>
      <Container>
        <Header text="Workout Journal" />
        <InformationContainer />
        <BottomNavigation />
      </Container>
    </NavigationContainer>
  );
};

export default homeScreen;
