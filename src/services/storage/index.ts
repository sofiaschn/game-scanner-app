import AsyncStorage from '@react-native-async-storage/async-storage';
import { GameObject } from '../../interfaces/Game';

export const storage = {
    storeGame: async (game: Omit<GameObject, 'id'>) => {
        const games = await storage.getGames();

        const index = games.findIndex((value) => game.code === value.code);

        const id = games.length + 1;
        const newGame = Object.assign(game, { id });

        if (index === -1) {
            games.push(newGame);
        } else {
            games[index] = newGame;
        }

        const stringifiedArray = JSON.stringify(games);
        await AsyncStorage.setItem('gamesArray', stringifiedArray);
    },

    updateGame: async (game: GameObject) => {
        const games = await storage.getGames();

        const index = games.findIndex((value) => game.code === value.code);
        games[index] = game;

        const stringifiedArray = JSON.stringify(games);
        await AsyncStorage.setItem('gamesArray', stringifiedArray);
    },

    getGames: async (): Promise<GameObject[]> => {
        const games = await AsyncStorage.getItem('gamesArray');
        return games ? JSON.parse(games) : [];
    },

    deleteGame: async (game: GameObject) => {
        const games = await storage.getGames();
        const index = games.findIndex((value) => game.code === value.code);
        if (index === -1) {
            return;
        }
        games.splice(index, 1);
        const stringifiedArray = JSON.stringify(games);
        await AsyncStorage.setItem('gamesArray', stringifiedArray);
    },
};
