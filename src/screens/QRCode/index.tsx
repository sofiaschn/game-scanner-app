import React, { useState } from 'react';
import { BarCodeReadEvent } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BottomNavigation from '../../components/BottomNavigation';
import Modal from '../../components/Modal';
import { Container } from './styles';

const QRCode = ({ navigation }: any) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const onRead = (read: BarCodeReadEvent) => {
        try {
            const game = JSON.parse(read.data);

            navigation.navigate('Game', { game });
        } catch (error) {
            setModalVisible(true);
        }
    };

    return (
        <Container>
            <QRCodeScanner onRead={onRead} />
            {isModalVisible && <Modal />}
            <BottomNavigation />
        </Container>
    );
};

export default QRCode;
