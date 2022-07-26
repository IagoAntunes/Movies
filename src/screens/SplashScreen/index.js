import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'react-native-web';

import { Text } from '../../components';
import { Logo } from '../../components';

export const SplashScreen = () =>  {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text>Start Wars - Wiki</Text>
      <StatusBar style="auto"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
