import React, {useEffect, useState } from "react";
import { HeroContainer, HeroImageBackground, HeroGradient, ButtonsView} from './style'
import { colors} from '../../../styles/colors'
import { Tag, IconButton, PlayButton } from '../../../components/molecules'
import { Text, Logo, } from '../../../components/atoms'
import { useFavorites} from '../../../services/hooks'

export const Hero = ({ item, onDetail }) => {
    const [loading, setLoading] = useState(true)
    const[isFavorite, setIsFavorite] = useState(false)
    const { addFavorite, getFavorites, removeFavorite} = useFavorites()
    const { image_url, title, subtitle, type} = item;

    const checkIsFavorite = async() => {
        setLoading(true)
        const favorites = await getFavorites()
        const isInFavorite = favorites.filter(
            (fv) => (fv.id === item.id) && (fv.type === item.type)
        )
        setIsFavorite(isInFavorite.length > 0)
        setLoading(false)
    }

    useEffect(() => {
        checkIsFavorite()
    }, [ ])

    const addDataToFavorite = async() => {
        const result = await addFavorite(item)
        checkIsFavorite()
    }
    const removeDataFromFavorite = async() => {
        const result = await removeFavorite(item)
        checkIsFavorite()
    }
    
    return (
        <HeroContainer>
            <HeroImageBackground source={{
                uri: image_url,
                }}
            >
                <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
                    {
                    !onDetail && <Logo size= 'small'/>
                    }
                    
                    <Tag mt={onDetail ? 224 : 200}>{type}</Tag>
                    <Text fontFamily='bold' size={28} mt={12}>{title}</Text>
                    <Text size={18}>{subtitle}</Text>
                    <ButtonsView>
                        <IconButton 
                        onPress={() => isFavorite? removeDataFromFavorite() :addDataToFavorite()} 
                        label={isFavorite ? "Rem Favorito" : "Add Favoritos"}
                        iconName={isFavorite? 'remove-circle-outline' :'add-circle-outline'}/>
                        <PlayButton/>
                        {
                            !onDetail && 
                                <IconButton label='Saiba Mais' iconName='information-circle-outline'/>
                        }
                        
                    </ButtonsView>
                </HeroGradient>
            </HeroImageBackground>
        </HeroContainer>
    )
}