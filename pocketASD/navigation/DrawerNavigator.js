import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Linking,
} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';

import ProfileScreen from '../screens/ProfileScreen';  
import ScreenerScreen from '../screens/ScreenerScreen';
import SchedulingScreen from '../screens/SchedulingScreen';
import ResourcesScreen from '../screens/ResourcesScreen';

import { ScreenerNavigator } from './ScreenerNavigator';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="MyChart by Epic"
        onPress={() => Linking.openURL('https://www.mychart.org/')}
      />
    </DrawerContentScrollView>
  );
}

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#078279',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    }
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="home"
              size={size}
              color={focused ? '#078279' : 'black'}
              style={{
                alignSelf: "center",
                position: "absolute",
                right: 5,
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="user-circle"
              size={size}
              color={focused ? '#078279' : 'black'}
              style={{
                alignSelf: "center",
                position: "absolute",
                right: 5,
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="ScreenerStack"
        component={ScreenerNavigator}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="question"
              size={size}
              color={focused ? '#078279' : 'black'}
              style={{
                alignSelf: "center",
                position: "absolute",
                right: 5,
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name = "Scheduling"
        component={SchedulingScreen}
        options = {{
            drawerIcon: ({focused, size}) => (
                <Icon
                    name="calendar"
                    size={size}
                    color = {focused ? '#078279' : 'black'}
                    style = {{
                      alignSelf: "center",
                      position: "absolute",
                      right: 5,
                    }}
                />
            )
        }}
      />
      <Drawer.Screen
        name = "Resources"
        component={ResourcesScreen}
        options = {{
            drawerIcon: ({focused, size}) => (
                <Icon
                    name="hands-helping"
                    size={size}
                    color = {focused ? '#078279' : 'black'}
                    style = {{
                      alignSelf: "center",
                      position: "absolute",
                      right: 5,
                    }}
                />
            )
        }}
      />
    </Drawer.Navigator>
  )
}

export { MainDrawerNavigator }