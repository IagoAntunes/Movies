import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../../atoms";
import { ButtonContainer } from './style'
import { theme } from "../../../styles";

export const PlayButton = ({onPress}) => {
    return(
    <ButtonContainer onPress={onPress}>
        <Ionicons name="play" 
            size={theme.metrics.px(12)} 
            color={theme.colors.black}
        />
        <Text fontFamily="bold" size={14} color='blackl'>
            Play
        </Text>
    </ButtonContainer>
    )
}
