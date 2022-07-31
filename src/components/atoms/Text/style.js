import styled from "styled-components";


export const CustomText = styled.Text`
    font-size: ${({ theme, size }) => theme.metrics.px(size || 24)}px;
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    font-family: ${({theme, fontFamily}) => theme.fonts[fontFamily || 'regular']};
    margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
    margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
    margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
    margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
    line-height: ${({ lh,size, theme}) => theme.metrics.px(lh || size || 24)}px

`