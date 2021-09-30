import React from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import Card from '../../components/Card';
import { Container, InformationContainer } from './styles';

const Home = () => {
    return (
        <Container>
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
