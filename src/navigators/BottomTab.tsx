import React from 'react';
import { Platform, Pressable, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, LeadsForm, SettingScreen } from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { useTheme } from '../hooks';
import { RFPercentage } from 'react-native-responsive-fontsize';
import MainNavigator from './Main';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const { Colors } = useTheme();
  const navigation=useNavigation()
  return (
    <View style={{flex:1}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        
          headerShown:false,
          tabBarShowLabel:false,
          headerBackgroundContainerStyle:{height:0},
          // header:{},
          // headerStatusBarHeight:50,
          headerTitleContainerStyle:{height:0},
          tabBarStyle: {
            backgroundColor: Colors.white,
            height: Platform.OS == "ios" ? RFPercentage(12) : RFPercentage(10),
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderTopWidth: 0,
          },
          // tabBarBackground: () => (
          //   <ImageBackground
          //     style={{ flex: 1 }}
          //     resizeMode="stretch"
          //     source={images.backgroundImage}
          //   />
          // ),
        })}
      >
        <Tab.Screen
          options={{
            // headerShown: false,
            // tabBarLabel: "home",
            headerStyle:{
              // height:0,
              backgroundColor:Colors.primary
            },
            tabBarLabelStyle: {
              fontSize: 10,
              color: Colors.primary,
            },
            tabBarIcon: ({ focused }) => (
              <>
               <MaterialIcons size={RFPercentage(4)} color={focused?Colors.primary:Colors.secondary} name={"group"} />
                <Pressable
                  // style={styles.iconPressable}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                />
              </>
            ),
          }}
          name="Dashboard"
          component={MainNavigator}
        />
        <Tab.Screen
          options={{
            // headerShown: false,
            tabBarLabel: 'home',
            tabBarLabelStyle: {
              fontSize: 10,
              color: Colors.primary,
            },
            tabBarIcon: ({ focused }) => (
              <>
                <SimpleLineIcons
                  size={RFPercentage(4)}
                  color={focused ? Colors.primary : Colors.secondary}
                  name={'envelope'}
                />
                {/* <Pressable
                    // style={styles.iconPressable}
                    onPress={() => {
                      // navigation.navigate("Lobby");
                    }}
                  /> */}
              </>
            ),
          }}
          name="Leads"
          component={LeadsForm}
        />
        <Tab.Screen
          options={{
            // headerShown: false,
            tabBarLabel: 'home',
            tabBarLabelStyle: {
              fontSize: 10,
              color: Colors.primary,
            },
            tabBarIcon: ({ focused }) => (
              <>
                <Octicons
                  size={RFPercentage(4)}
                  color={focused ? Colors.primary : Colors.secondary}
                  name={'gear'}
                />
                {/* <Pressable
                    // style={styles.iconPressable}
                    onPress={() => {
                      // navigation.navigate("Lobby");
                    }}
                  /> */}
              </>
            ),
          }}
          name="Settings"
          component={SettingScreen}
        />
      </Tab.Navigator>
    </View>
  );
};
export default BottomTabs;



// import React from 'react';
// import { View, Text, Pressable } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';
// import MainNavigator from './Main';
// import LeadesDetails from '../screens/LeadsDetails/LeadesDetails';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// const HomeScreen = () => {
//   const navigation =useNavigation()
//   return(
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Pressable onPress={()=>navigation.navigate('Details')}>
//     <Text>goto Details Screen</Text>
//     </Pressable>
//   </View>
// );}

// const DetailsScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Details Screen</Text>
//   </View>
// );

// const ProfileScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Profile Screen</Text>
//   </View>
// );

// const HomeStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Details" component={LeadesDetails} />
//   </Stack.Navigator>
// );

// const App = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = 'home';
//           } else if (route.name === 'Profile') {
//             iconName = 'user';
//           }

//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         tabBarLabel: () => null,
//         headerShown: false,
//       })}
//       tabBarOptions={{
//         showLabel: false,
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeStack} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// export default App;
