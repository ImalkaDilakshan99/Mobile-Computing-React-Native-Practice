import { Alert, StyleSheet, View } from 'react-native';

import CustomButton from '@/components/ui/CustomButton';
import CustomLabel from '@/components/ui/CustomLabel';
import CustomTextBox from '@/components/ui/CustomTextBox';
import { useState } from 'react';

export default function HomeScreen() {

  const [name, setName] = useState('');

  const handlePress = () => {
    Alert.alert('Submitted', `You entered: ${name}`);
  };

  return (
   <View style={styles.container}>
    <CustomLabel text="Enter your name:" />

    <CustomTextBox onChangeText={setName} placeholder="Your Name" />

    <CustomButton title="Submit" onPress={handlePress} />
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    justifyContent:'center',
  }
});
