import React from "react";
import { useNavigation } from '@react-navigation/native'
import {  CardContainer, CardImage } from './style';
import {useDataStore } from '../../../services/stores'

export const Card = ({ item }) => {
   const { setSelectedData } = useDataStore();
    const navigation = useNavigation();

    const onSelectItem = () => {
        setSelectedData(item)
        navigation.navigate('Detail')
    }

    return (
        <CardContainer onPress={() => onSelectItem()}>
            <CardImage source={{uri: item.image_url}}/>
        </CardContainer>
    )
}