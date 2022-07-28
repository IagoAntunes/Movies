import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../../atoms";
import { ButtonContainer } from './style'
import { theme } from "../../../styles";

export const IconButton = ({ iconName, label, onPress }) => {
    return(
        <ButtonContainer onPress={onPress}>
            <Ionicons name={iconName} size={theme.metrics.px(24)} color={theme.colors.white}/>
            <Text fontFamily="semiBold" size={10} mt={6} >{label}</Text>
        </ButtonContainer>
    )
}


