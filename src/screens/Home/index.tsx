import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import GameCard from '../../components/GameCard';
import { GameObject } from '../../interfaces/Game';
import { storage } from '../../services/storage';
import { Container, InformationContainer } from './styles';

const Home = () => {
    const [games, setGames] = useState([] as GameObject[]);

    useEffect(() => {
        getGames();
    }, []);

    const getGames = async () => {
        setGames(await storage.getGames());
    };

    return (
        <Container>
            <InformationContainer>
                {games.map((game) => {
                    return <GameCard key={game.id} game={game} />;
                })}
            </InformationContainer>
            <BottomNavigation />
        </Container>
    );
};

export default Home;
