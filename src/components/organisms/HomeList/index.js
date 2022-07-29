import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'
import { ListContainer } from './style'
import {theme } from '../../../styles/theme'

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
  },
  {
    id: 1,
    image_url:
      'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2020/02/desafio-jedi-de-mestre-yoda-consertar-as-frases-consegue-vocecc82.jpg?quality=100&strip=info',
  }
]

export const HomeList = ({data, title}) => {
  return (
    <ListContainer>
      <Text ml={24} fontFamily="black" size={18}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
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