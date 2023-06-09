import React from 'react';
import { HomeScreen, LeadsForm, SettingScreen } from '../screens';
// import { createStackNavigator } from '@react-navigation/stack';
import LeadesDetails from '../screens/LeadsDetails/LeadesDetails';
import {
  HOME_ROUTE,
  LEADES_FORM,
  LEADS_DETAILS_ROUTE,
  MORE_ROUTE,
} from '../utils/Constants';
import { createStackNavigator } from '@react-navigation/stack';


// @refresh reset
const MainNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      // initialRouteName="LeadsDetails"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={HOME_ROUTE} component={HomeScreen} />
      <Stack.Screen name={LEADS_DETAILS_ROUTE} component={LeadesDetails} />
      <Stack.Screen name={LEADES_FORM} component={LeadsForm} />
      <Stack.Screen name={MORE_ROUTE} component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

// // const HomeStack=createStackNavigator()

// // @refresh reset
// // const HomeScreenStack = () => {
// //   return (
// //     <HomeStack.Navigator screenOptions={{ headerShown: false }}>

// //       <HomeStack.Screen name="Home" component={HomeScreen} />
// //       <HomeStack.Screen name="LeadsDetails" component={LeadesDetails} />
// //     </HomeStack.Navigator>
// //   );
// // };
// // export  {HomeScreenStack}
