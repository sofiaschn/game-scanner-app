import React, { useState } from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import {
    Container,
    SettingsContainer,
    DeleteButton,
    DeleteText,
    DeleteContainer,
} from './styles';
import { storage } from '../../services/storage';
import { GameObject } from '../../interfaces/Game';
import Modal from '../../components/Modal';

const GameSettings = ({ route, navigation }: any) => {
    const game: GameObject = route.params.game;

    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <Container>
            <SettingsContainer></SettingsContainer>
            <DeleteContainer>
                <DeleteButton onPress={() => setModalVisible(true)}>
                    <DeleteText>Delete game</DeleteText>
                </DeleteButton>
            </DeleteContainer>
            <BottomNavigation />
            <Modal
                text="Are you sure you want to delete the game?"
                icon="warn"
                visible={isModalVisible}
                buttons={{
                    titles: ['yes', 'no'],
                    onPress: async (button) => {
                        if (button === 'yes') {
                            await storage.deleteGame(game);
                            navigation.goBack();
                        }
                        setModalVisible(false);
                    },
                }}
            />
        </Container>
    );
};

export default GameSettings;
