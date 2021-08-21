import React from 'react';
import 'react-native-gesture-handler';
import BottomNavigation from '../../components/BottomNavigation';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { Container, InformationContainer } from './styles';

const Home = () => {
    return (
        <Container>
            <Header text="Workout Journal" />
            <InformationContainer>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </InformationContainer>
            <BottomNavigation />
        </Container>
    );
};

export default Home;
