import React from 'react';
import {
    ArrowView,
    ButtonView,
    GamepadContainer,
    MiddleArrows,
} from './styles';
import { Directions } from '../../interfaces/Game';
import Arrow from './Arrow';

const Gamepad: React.FC<{
    onPressArrow: (arrow: Directions) => void;
}> = ({ onPressArrow }) => {
    return (
        <GamepadContainer>
            <ButtonView></ButtonView>
            <ArrowView>
                <Arrow direction="up" onPress={() => onPressArrow('up')} />
                <MiddleArrows>
                    <Arrow
                        direction="left"
                        onPress={() => onPressArrow('left')}
                    />
                    <Arrow
                        direction="right"
                        onPress={() => onPressArrow('right')}
                    />
                </MiddleArrows>
                <Arrow direction="down" onPress={() => onPressArrow('down')} />
            </ArrowView>
        </GamepadContainer>
    );
};

export default Gamepad;
