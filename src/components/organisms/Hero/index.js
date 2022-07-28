import React from "react";
import { HeroContainer, HeroImageBackground, HeroGradient, ButtonsView} from './style'
import { colors} from '../../../styles/colors'
import { Tag, IconButton, PlayButton } from '../../../components/molecules'
import { Text, Logo, } from '../../../components/atoms'

export const Hero = () => {
    return (
        <HeroContainer>
            <HeroImageBackground source={{
                uri: 'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg'
                }}
            >
                <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
                    <Logo size= 'small'/>
                    <Tag mt={200}>Filme</Tag>
                    <Text fontFamily='bold' size={28} mt={12}>Episodio I</Text>
                    <Text size={18}>A ameaça Fantasma</Text>
                    <ButtonsView>
                        <IconButton label='Favoritos' iconName='add-circle-outline'/>
                        <PlayButton/>
                        <IconButton label='Saiba Mais' iconName='information-circle-outline'/>
                    </ButtonsView>
                </HeroGradient>
            </HeroImageBackground>
        </HeroContainer>
    )
}