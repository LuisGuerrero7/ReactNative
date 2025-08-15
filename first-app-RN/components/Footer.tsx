import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View
      style={styles.container}>
      <Text
        style={styles.innerContainer}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#F4CE14',
        marginBottom: 10,
  } , 
  innerContainer : {
              fontSize: 18,
          color: 'black',
          textAlign: 'center',
          fontStyle: 'italic'
  }
})