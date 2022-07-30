import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, SplashScreen, Detail, FavoritesScreen, SearchScreen } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { theme } from '../styles'
import { Ionicons } from '@expo/vector-icons'

const routeIcons = {
  "Home": "home-outline",
  "Search": "search-outline",
  "Favorites": "heart-outline",
}

const BottomRoute = () => {
  const Tab = createBottomTabNavigator()
  return(
    <Tab.Navigator
    
    screenOptions={({ route}) => ({
      tabBarIcon: ({focused, color, size }) => {
        return (<Ionicons 
          name={routeIcons[route.name]}
          size={size}
          color={color}/>
        )
      },
    })}



    tabBarOptions={{
      activeTintColor: theme.colors.red,
      inactiveTintColor: theme.colors.white,
      tabStyle:{
        backgroundColor: theme.colors.dark
      }
    }}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen options={{tabBarLabel: 'Pesquisar'}} name="Search" component={SearchScreen}/>
      <Tab.Screen options={{tabBarLabel: 'Favoritos'}} name="Favorites" component={FavoritesScreen}/>
    </Tab.Navigator>
  )
}

export const Routes = () => {
  const Stack = createStackNavigator()



  return (
    <NavigationContainer>
      <Stack.Navigator headerMode= "none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={BottomRoute} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}