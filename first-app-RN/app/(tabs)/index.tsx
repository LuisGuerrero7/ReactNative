import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/Header'; // ajusta el path si tu archivo se llama distinto
import Footer from '@/components/Footer';
import WelcomeScreen from '@/components/WelcomeScreen';
import MenuItems from '@/components/MenuItems';
import LoginScreen from '@/components/LoginScreen';
import Welcome from '@/components/Welcome';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  Welcome: undefined;
  Login: undefined;
  MenuItems: undefined; // <- porque haces navigation.navigate('MenuItems')
};

const Stack = createNativeStackNavigator<RootTabParamList>();

export default function App() {
  return (
      <>
        <View style={styles.container}>
          <Header />
          <Tab.Navigator initialRouteName="Login" screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:any;

          if (route.name === 'Welcome') {
            iconName = 'ios-home'
          } else if (route.name === 'MenuItems') {
            iconName =  'ios-enter';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
            <Tab.Screen name="Welcome" component={WelcomeScreen}/>
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name='MenuItems' component={MenuItems} />
          </Tab.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  footerContainer: {
    backgroundColor: '#333333'
  }
})
