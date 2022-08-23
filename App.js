import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthProvider } from './context/authContext'
import AppNav from './navigation/AppNav'

const App = () => {

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  )
}

export default App

const styles = StyleSheet.create({})