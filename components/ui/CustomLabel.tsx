import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

interface CustomButtonProps{
    text: string;
}

export default class CustomLabel extends Component<CustomButtonProps> {
  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    label:{
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    }
})