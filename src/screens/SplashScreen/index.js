import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { Text } from '../../components';
import { Logo } from '../../components';
import { Container } from '../../components';

export const SplashScreen = ({ navigation }) =>  {
  useEffect(()=> {
    setTimeout(() => {
      navigation.navigate('Home')
    },1000)
  },[navigation]);

  return (
    <Container align="center" justify="center">
      <Logo/>
      <Text>Start Wars - Wiki</Text>
    </Container>
  );
}

