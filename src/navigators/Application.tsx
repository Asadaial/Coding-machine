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
  const { Layout, darkMode, NavigationTheme,Colors } = useTheme();
  const { colors } = NavigationTheme;

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <View
      style={[Layout.fill, { flex: 1, backgroundColor:Colors.white }]}
    >
      <StatusBar
        translucent={true}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={"transparent"}
      />
      <SafeAreaView style={[Layout.fill, { backgroundColor:Colors.white,paddingTop:Platform.OS=="android"?StatusBar.currentHeight:0}]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Startup" component={Login} />

          <Stack.Screen name="Main" component={MyDrawer} />

        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

export default ApplicationNavigator;
