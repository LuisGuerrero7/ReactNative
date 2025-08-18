import React from 'react';
import { ScrollView, Image, StyleSheet, Text } from 'react-native';

const Welcome = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('first-app-RN/assets/images/littleLemonLogo.png')}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />

      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Image
        style={styles.image}
        source={require('first-app-RN/assets/images/Picture1.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('first-app-RN/assets/images/Picture2.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('first-app-RN/assets/images/Picture3.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('first-app-RN/assets/images/Picture4.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Welcome;
