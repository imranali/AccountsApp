import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { AuthContext } from '../context/authContext';

export const AppNav = () => {

const {userInfo,isLoading}  =  useContext(AuthContext);


return (
   

  <NavigationContainer>

    {userInfo !== null ? (<AppStack />) : (<AuthStack />) }
     
  </NavigationContainer>

  )
}

export default AppNav
