import { Text, View, StyleSheet, TextInput } from 'react-native'
import React, { Component } from 'react'

interface CustomTextBoxProps {
    onChangeText: (text: string) => void;
    placeholder: string;
}

export class CustomTextBox extends Component<CustomTextBoxProps> {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input} onChangeText={this.props.onChangeText} placeholder={this.props.placeholder} placeholderTextColor={'gray'} />
            </View>
        )
    }
}

export default CustomTextBox

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: '100%',
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: '#fff',

    }
});