import React , { useEffect}from "react";
import { useFavorites } from "../../services/hooks";
import { ScreenScrollContainer,Text } from "../../components";

export const FavoritesScreen = ({ navigation }) =>{
    const {getFavorites} = useFavorites()

    const callGetFavorites = async() => {
        const favorites = await getFavorites()
    }
    useEffect(() => { 
        const unsubscribe = navigation.addListener('focus',() =>{
            callGetFavorites()
        }) 
        return unsubscribe
    },[])

    return(
        <ScreenScrollContainer widthPadding>
            <Text fontFamily="bold" size={28}>Favoritos</Text>
        </ScreenScrollContainer>
    )
}