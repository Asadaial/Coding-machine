import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import CustomButton from '../customButton/CustomButton';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useTheme } from '../../hooks';
import CustomTouchableOpacity from '../touchableOpacity/CustomTouchableOpacity';
import ProfileIcon from '../ProfileIcon/ProfileIcon';

const DrawerContent = ({ logout }) => {
  const { Colors, Fonts, Images } = useTheme();
  return (
    <View style={styles.container}>
      {/* Drawer content goes here */}
      <Image
        source={Images.Drawer.DrawerHeader}
        style={{ width: '100%', height:hp(20), position: 'absolute', top: 0 }}
      />
      <View style={{ flexDirection: 'row',marginLeft:wp(5),marginTop: hp(5),alignItems:"center"}}>
        <ProfileIcon  />
        <View style={{marginLeft:wp(3)}}>
          <Text
            style={[Fonts.textSmall, Fonts.textBold, { color: Colors.white }]}
          >
            Jeremy Scinta
          </Text>
          <Text
            style={[Fonts.text12tiny,, { color: Colors.white }]}
          >
                      jeremy@gmail.com
          </Text>

        </View>
      </View>
      {/* Logout button */}
      <CustomTouchableOpacity
        onPress={logout}
        style={[styles.logoutButton, { backgroundColor: Colors.neutral }]}
      >
        <SimpleLineIcons color={Colors.primary} name="logout" size={RFPercentage(2.5)} />
        <Text style={[styles.logoutButtonText, Fonts.logoutText]}>Logout</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    borderRadius: RFPercentage(3),
  },
  logoutButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DrawerContent;
