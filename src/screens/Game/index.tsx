/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-eval */
import React from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import { Container, GameContainer, CanvasContainer } from './styles';
import Canvas from 'react-native-canvas';
import Gamepad from '../../components/Gamepad';
import { storage } from '../../services/storage';
import { GameObject } from '../../interfaces/GameObject';

const Game = ({ route }: any) => {
    const game: GameObject = route.params.game;
    storage.storeGame(game);
    let direction = 'up';

    const handleCanvas = (canvas: any) => {
        if (canvas) {
            canvas.height = 256;
            canvas.width = 256;
            eval(game.code);
        }
    };

    return (
        <Container>
            <GameContainer>
                <CanvasContainer>
                    <Canvas ref={handleCanvas} />
                </CanvasContainer>
                <Gamepad
                    onPressArrow={(arrow) => {
                        direction = arrow;
                    }}
                />
            </GameContainer>
            <BottomNavigation />
        </Container>
    );
};

export default Game;
