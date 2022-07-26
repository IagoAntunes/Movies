import React from "react";
import { ScreenScrollContainer, Hero, GoBack,Text} from "../../components";
import {useDataStore } from '../../services/stores'



export const Detail = () => {
    const { selectedData } = useDataStore();
    return (
    <ScreenScrollContainer align="flex-start" justify="flex-start">
        <Hero item={selectedData} onDetail/>
        <Text ml={24} fontFamily='bold'  size={18}>
        Descrição
        </Text>
        <Text mt={12} ml={24} mr={24} size={14} lh={20}>
            {selectedData.description}
        </Text>
        <GoBack/>
    </ScreenScrollContainer>
    )
}