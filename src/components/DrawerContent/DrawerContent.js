import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CustomButton from '../customButton/CustomButton';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useTheme } from '../../hooks';
import CustomTouchableOpacity from '../touchableOpacity/CustomTouchableOpacity';

const DrawerContent = ({ logout }) => {
    const {Colors,Fonts}=useTheme()
  return (
    <View style={styles.container}>
      {/* Drawer content goes here */}

      {/* Logout button */}
      <CustomTouchableOpacity onPress={logout} style={[styles.logoutButton,{backgroundColor:Colors.secondary}]}>
      <SimpleLineIcons name="logout" size={RFPercentage(2.5)}  />
        <Text style={[styles.logoutButtonText,Fonts.logoutText]}>Logout</Text>
      </CustomTouchableOpacity>
      {/* <CustomButton
        onPress={logout}
        style={styles.logoutButton}
        styleText={{justifyContent: 'center',}}
        IconLeft={<SimpleLineIcons name="logout"  />}
        title={
     "logout"
        }
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoutButton: {
    position: 'absolute',
    bottom: RFPercentage(4),
    left: wp(8),
    right: 0,
    // backgroundColor: 'red',
    padding: 16,
    alignItems: 'center',
    flexDirection:"row",
    justifyContent:"space-between",
    width:"70%",
    borderRadius:RFPercentage(3),

 
  },
  logoutButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DrawerContent;
