import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Linking, Text
} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';

import ProfileScreen from '../screens/ProfileScreen';  
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
          height: 110
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
          drawerActiveTintColor: '#078279',
          drawerActiveBackgroundColor: '#C5FFFB',
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="home"
              size={size}
              color={focused ? '#078279' : 'gray'}
              style={{
                alignSelf: "center",
                position: "absolute",
                right: 10,
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerActiveTintColor: '#078279',
          drawerActiveBackgroundColor: '#C5FFFB',
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="user-circle"
              size={size}
              color={focused ? '#078279' : 'gray'}
              style={{
                alignSelf: "center",
                position: "absolute",
                right: 10,
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Screener"
        component={ScreenerNavigator}
        options={{
          drawerActiveTintColor: '#078279',
          drawerActiveBackgroundColor: '#C5FFFB',
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="question"
              size={size}
              color={focused ? '#078279' : 'gray'}
              style={{
                alignSelf: "center",
                position: "absolute",
                right: 10,
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name = "Scheduling"
        component={SchedulingScreen}
        options = {{
          drawerActiveTintColor: '#078279',
          drawerActiveBackgroundColor: '#C5FFFB',
            drawerIcon: ({focused, size}) => (
                <Icon
                    name="calendar"
                    size={size}
                    color = {focused ? '#078279' : 'gray'}
                    style = {{
                      alignSelf: "center",
                      position: "absolute",
                      right: 10,
                    }}
                />
            )
        }}
      />
      <Drawer.Screen
        name = "Resources"
        component={ResourcesScreen}
        options = {{
          drawerActiveTintColor: '#078279',
          drawerActiveBackgroundColor: '#C5FFFB',
            drawerIcon: ({focused, size}) => (
                <Icon
                    name="hands-helping"
                    size={size}
                    color = {focused ? '#078279' : 'gray'}
                    style = {{
                      alignSelf: "center",
                      position: "absolute",
                      right: 10,
                    }}
                />
            )
        }}
      />
    </Drawer.Navigator>
  )
}

export { MainDrawerNavigator }