import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BottomNavigation from '../../components/BottomNavigation';
import { Container } from './styles';

const QRCode = ({ navigation }: any) => {
    return (
        <Container>
            <QRCodeScanner
                onRead={(QRData) => navigation.navigate('Game', { QRData })}
            />
            <BottomNavigation />
        </Container>
    );
};

export default QRCode;
