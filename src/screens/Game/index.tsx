/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-eval */
import React from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import { Container, GameContainer, CanvasContainer } from './styles';
import { GCanvasView } from '@flyskywhy/react-native-gcanvas';
import Gamepad from '../../components/Gamepad';
import { storage } from '../../services/storage';
import { Directions, GameObject } from '../../interfaces/Game';

const Game = ({ route }: any) => {
    const game: GameObject = route.params.game;
    storage.storeGame(game);
    let direction: Directions;

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
                    <GCanvasView
                        onCanvasCreate={handleCanvas}
                        style={{ width: 256, height: 256 }}
                    />
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
