import React from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import { Container, SettingsContainer } from './styles';
import { storage } from '../../services/storage';
import { GameObject } from '../../interfaces/Game';
import { Button } from 'react-native';

const GameSettings = ({ route, navigation }: any) => {
    const game: GameObject = route.params.game;

    return (
        <Container>
            <SettingsContainer>
                <Button
                    onPress={async () => {
                        await storage.deleteGame(game);
                        navigation.goBack();
                    }}
                    title="Delete game"
                />
            </SettingsContainer>
            <BottomNavigation />
        </Container>
    );
};

export default GameSettings;
