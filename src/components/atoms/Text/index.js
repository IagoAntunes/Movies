import React from "react";
import { CustomText } from './style'

export const Text = ({ children, color, fontSize }) => {
    return (
        <CustomText color={color} fontSize={fontSize}>
            {children}
        </CustomText>
    )
}
