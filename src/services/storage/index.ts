import AsyncStorage from '@react-native-async-storage/async-storage';
import { GameObject } from '../../interfaces/GameObject';

export const storage = {
    storeGame: async (value: GameObject) => {
        const games = await AsyncStorage.getItem('gamesArray');
        const gamesArray: GameObject[] = games ? JSON.parse(games) : [];
        const index = gamesArray.findIndex((game) => value.id === game.id);
        index === -1 ? gamesArray.push(value) : (gamesArray[index] = value);
        const stringifiedArray = JSON.stringify(gamesArray);
        await AsyncStorage.setItem('gamesArray', stringifiedArray);
    },

    getGames: async (): Promise<GameObject[]> => {
        const games = await AsyncStorage.getItem('gamesArray');
        return games ? JSON.parse(games) : [];
    },
};
