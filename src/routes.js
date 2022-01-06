import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import Home from './pages/Home';
import Search from './pages/Search';
import Verify from './pages/Verify';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const Routes = () => {
  function BottomAppTabs() {
    return (
      <Tabs.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = 'home';
            } else if (route.name === "Search") {
              iconName = 'search';
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#010414',
            borderTopWidth: 0,
          }
        })}
      >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Search" component={Search} />
      </Tabs.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="BottomAppTabs" component={BottomAppTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;