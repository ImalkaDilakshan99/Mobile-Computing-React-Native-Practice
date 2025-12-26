import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    
}

export default class CustomButton extends Component<CustomButtonProps> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.button, {backgroundColor: '#0080fe'}]}
        activeOpacity={0.7}
        
      >
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize:16,
    }
})