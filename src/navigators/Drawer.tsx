import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import BottomTabs from './BottomTab';
import MainNavigator from './Main';
import DrawerContent from '../components/DrawerContent/DrawerContent';
import { useNavigation } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  const navigation=useNavigation()
  const handleLogout = () => {
    // Logic for logging out
    navigation.replace("Startup")
    console.log('logout content');
  };

  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent logout={handleLogout} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Tabs" component={MainNavigator} />
      {/* <Drawer.Screen name="Tabs" component={BottomTabs} /> */}
    </Drawer.Navigator>
  );
}
export default MyDrawer;
