import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useStore} from '../store/store'
import { COLORS } from '../theme/theme'

const HomeScreen = () => {

  const CoffeeList = useStore((state:any) => state.CoffeeList)
  

  return (
    <View style = {styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
      <ScrollView></ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer:{
    flex:1,
    backgroundColor:'#000000',
  },
})

export default HomeScreen
