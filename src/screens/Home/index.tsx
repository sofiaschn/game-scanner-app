import { useIsFocused } from '@react-navigation/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import GameCard from '../../components/GameCard';
import { GameObject } from '../../interfaces/Game';
import { storage } from '../../services/storage';
import { Container, InformationContainer } from './styles';

const Home = () => {
    const [games, setGames] = useState([] as GameObject[]);
    const [refreshing, setRefreshing] = useState(false);
    const isFocused = useIsFocused();

    const getGames = async () => {
        setRefreshing(true);
        setGames(await storage.getGames());
        setRefreshing(false);
        console.log('Updated Home');
    };

    useEffect(() => {
        if (isFocused) {
            getGames();
        }
    }, [isFocused]);

    return (
        <Container>
            <InformationContainer
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={getGames}
                    />
                }>
                {games.map((game) => {
                    return <GameCard key={game.id} game={game} />;
                })}
            </InformationContainer>
            <BottomNavigation />
        </Container>
    );
};

export default Home;
