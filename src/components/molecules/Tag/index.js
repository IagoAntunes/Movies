import React from "react";
import { TagContainer } from './style'
import { Text } from  '../../atoms'

export const Tag = ({ children, ...props }) => {
    return(
    <TagContainer {...props}>
        <Text fontFamily="bold" size={14} >
            {children}
        </Text>
    </TagContainer>
    )
}