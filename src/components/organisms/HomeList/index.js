import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'
import { ListContainer } from './style'
import {theme } from '../../../styles/theme'


export const HomeList = ({data, title, type}) => {
  return (
    <ListContainer>
      <Text ml={24} fontFamily='bold'  size={18}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={{...item,type}} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle= {{
          paddingLeft: theme.metrics.px(24),
          paddingTop: theme.metrics.px(12),
          paddingBottom: theme.metrics.px(24),
        }}
      />
    </ListContainer>

  )
}