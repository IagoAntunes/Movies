import { api } from '../api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DB_KEY = '@StarWarsWiki:favorites'


export const useFavorites = () => {
    const addFavorite = async (data) => {
        let newDb;
        const value = await AsyncStorage.getItem(DB_KEY)
        if (!value) {//ja existe um BD
            const db = JSON.parse(value)
            newDb = Array[db].push(data)

        } else {//Criar BD
            newDb = [data]
        }
        const jsonValue = JSON.stringify(newDb)
        await AsyncStorage.setItem(DB_KEY, jsonValue)

        return newDb
    }

    const getFavorites = async() => {
        const value = await AsyncStorage.getItem(DB_KEY)
        if (!value) {//ja existe um BD
            const db = JSON.parse(value)
            return db

        } else {//Criar BD
            return []
        }
    }

    return {
        addFavorite,
        getFavorites
    }
}