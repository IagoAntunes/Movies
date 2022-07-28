import React from "react";
import { CustomText } from './style'

export const Text = ({ children, fontSize, ...props }) => {
    return (
        <CustomText {...props} fontSize={fontSize}>
            {children}
        </CustomText>
    )
}
