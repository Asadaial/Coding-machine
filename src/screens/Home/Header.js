import { Alert, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DrawerIcon } from '../../theme/assets/Svgs/Icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useTheme } from '../../hooks';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../..//components/SearchBar/SearchBar';
import CustomTouchableOpacity from '../../components/touchableOpacity/CustomTouchableOpacity';

const Header = ({ style }) => {
  const { Colors, Layout, Fonts } = useTheme();
  const navigation = useNavigation();
  return (
    <View style={[{ backgroundColor: Colors.primary, height: hp(15) }, style]}>
      <StatusBar
        showHideTransition={true}
        barStyle={'dark-content'}
        backgroundColor={Colors.primary}
      />
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: wp(4),
          justifyContent: 'space-between',
          marginTop: hp(4),
        }}
      >
        <CustomTouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.custombtnstyle}
        >
          <DrawerIcon
            onPress={() => navigation.openDrawer()}
            style={{
              width: RFPercentage(4),
              height: RFPercentage(4),
            }}
          />
        </CustomTouchableOpacity>

        <Text
          style={[Fonts.textRegular, Fonts.textBold, { color: Colors.white }]}
        >
          Hello, John
        </Text>
        <ProfileIcon />
      </View>
      <View
        style={{
          position: 'relative',
          bottom: -hp(5),
          alignSelf: 'center',
          width: '100%',
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <SearchBar />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  custombtnstyle: {
    width: RFPercentage(5),
    height: RFPercentage(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
