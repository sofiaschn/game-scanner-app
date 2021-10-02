import React from 'react';
import { ArrowContainer } from './styles';
import {
    ArrowCircleUpIcon,
    ArrowCircleDownIcon,
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
} from 'react-native-heroicons/solid';
import { colors } from '../../../colors';
import { Directions } from '../../../interfaces/Game';

const Arrow: React.FC<{ direction: Directions; onPress: () => void }> = ({
    direction,
    onPress,
}) => {
    return (
        <ArrowContainer onPress={onPress}>
            {direction === 'up' && (
                <ArrowCircleUpIcon size={70} color={colors.button} />
            )}
            {direction === 'down' && (
                <ArrowCircleDownIcon size={70} color={colors.button} />
            )}
            {direction === 'left' && (
                <ArrowCircleLeftIcon size={70} color={colors.button} />
            )}
            {direction === 'right' && (
                <ArrowCircleRightIcon size={70} color={colors.button} />
            )}
        </ArrowContainer>
    );
};

export default Arrow;
