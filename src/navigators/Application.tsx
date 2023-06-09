import React from 'react';
import { Platform, SafeAreaView, StatusBar, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
// import { HomeScreen, LeadsForm, Login, SettingScreen } from '../screens';
import { useTheme } from '../hooks';
// import MainNavigator from './Main';
import { useFlipper } from '@react-navigation/devtools';
import { Login } from '../screens';
import MyDrawer from './Drawer';
import { heightPercentageToDP } from 'react-native-responsive-screen';
// import { ApplicationStackParamList } from '../../@types/navigation';
// import  BottomTabs  from './BottomTab';
// import MyDrawer from './Drawer';
// import LeadesDetails from '../screens/LeadsDetails/LeadesDetails';
// import { HOME_ROUTE, LEADES_FORM, LEADS_DETAILS_ROUTE, MORE_ROUTE } from '../utils/Constants';
// import DetailsScreen from '../screens/LeadsDetails/DetailsScreen';

const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <View style={[Layout.fill, { backgroundColor: colors.card,marginTop:Platform.OS=="ios"? heightPercentageToDP(4):heightPercentageToDP(0) }]}>
      <NavigationContainer 
      theme={NavigationTheme}
       ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ 
          headerShown: false,
          
         }}>
          <Stack.Screen name="Startup" component={Login} />
          
          <Stack.Screen name="Main" component={MyDrawer} />
          {/* <Stack.Screen name={HOME_ROUTE} component={HomeScreen} />
          <Stack.Screen name={MORE_ROUTE} component={SettingScreen} />
          <Stack.Screen name={LEADS_DETAILS_ROUTE} component={LeadesDetails} />
          <Stack.Screen name={LEADES_FORM} component={LeadsForm} /> */}
         
        </Stack.Navigator>
      </NavigationContainer>
     </View>
  );
};

export default ApplicationNavigator;
