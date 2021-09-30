/* eslint-disable no-eval */
import React from 'react';
import 'react-native-gesture-handler';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BottomNavigation from '../../components/BottomNavigation';
import { Container } from './styles';

const QRCode = () => {
    return (
        <Container>
            <QRCodeScanner onRead={(read) => eval(read.data)} />
            <BottomNavigation />
        </Container>
    );
};

export default QRCode;
