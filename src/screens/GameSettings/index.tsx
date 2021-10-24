import React, { useState } from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import {
    Container,
    SettingsContainer,
    DeleteButton,
    Text,
    ButtonContainer,
    Settings,
    TextInput,
    PropertyContainer,
    SaveButton,
} from './styles';
import { storage } from '../../services/storage';
import { GameObject } from '../../interfaces/Game';
import Modal from '../../components/Modal';

const GameSettings = ({ route, navigation }: any) => {
    const game: GameObject = route.params.game;

    const [isModalVisible, setModalVisible] = useState(false);
    const [name, onChangeName] = useState(game.name);

    return (
        <Container>
            <SettingsContainer>
                <Settings>
                    <PropertyContainer>
                        <Text>Name</Text>
                        <TextInput
                            value={name}
                            onChangeText={(text) => onChangeName(text)}
                        />
                    </PropertyContainer>

                    <PropertyContainer>
                        <Text>Game ID</Text>
                        <TextInput
                            value={game.id.toString(10)}
                            editable={false}
                        />
                    </PropertyContainer>

                    <ButtonContainer>
                        <SaveButton
                            onPress={async () => {
                                game.name = name;
                                await storage.storeGame(game);
                                navigation.goBack();
                            }}>
                            <Text>Save</Text>
                        </SaveButton>
                    </ButtonContainer>
                </Settings>
            </SettingsContainer>
            <ButtonContainer>
                <DeleteButton onPress={() => setModalVisible(true)}>
                    <Text>Delete game</Text>
                </DeleteButton>
            </ButtonContainer>
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
