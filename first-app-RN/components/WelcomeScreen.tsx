import * as React from 'react';
import { useState } from 'react';

import { ScrollView, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

export default function WelcomeScreen() {
  
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [feedback, setFeedback] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView indicatorStyle={"white"}  keyboardDismissMode='on-drag'>
        <Text
          style={styles.welcomeText}>
          Welcome to Little Lemon
        </Text>
        <Text
          style={styles.secondText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear more about your experience with us!
        </Text>
        <Text style={styles.secondText}>
          Please answer this questions:
        </Text>
        <TextInput value={firstName} onChangeText={setFirstName} placeholder='First Name'
          style={styles.textInput}
        >
        </TextInput>
        <TextInput value={lastName} onChangeText={setLastName} placeholder='LastName'
          style={styles.textInput}
        >
        </TextInput>
          <TextInput value={phoneNumber} onChangeText={setPhoneNumber} placeholder='Phone Number'
          style={styles.textInput}
          keyboardType='phone-pad'
        >
        </TextInput>
        <TextInput value={feedback} 
          onChangeText={setFeedback} 
          multiline={true}
          placeholder='Please give us your feedback!'
          maxLength={250}
          style={styles.feedbackInput}
        >
        </TextInput>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  } , 
  welcomeText: {
    padding: 40,
          fontSize: 30,
          color: '#EDEFEE',
          textAlign: 'center',
  },
  secondText: {
          fontSize: 25,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  feedbackInput: {
    height: 100,
    margin: 12,
    borderWidth:1,
    padding:10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',

  }

})
