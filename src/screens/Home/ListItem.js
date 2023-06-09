import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomButton from '../../components/customButton/CustomButton';
import { TERTIARY } from '../..//utils/Constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CustomTouchableOpacity from '../../components/touchableOpacity/CustomTouchableOpacity';

const ListItem = ({
  name = 'Jeremy Scinta',
  number = '+12345678',
  mail = 'js@conversion-monster.com',
  onPress,
}) => {
  const { Colors, Layout, Gutters, Fonts } = useTheme();
  return (
    <CustomTouchableOpacity
      onPress={onPress}
      style={[
        Layout.selfCenter,
        Gutters.smallHPadding,
        Gutters.smallVPadding,
        {
          width: '90%',
          // height: hp(13),
          backgroundColor: Colors.white,
          borderRadius: RFPercentage(1),
          marginVertical: hp(1),
          paddingVertical:hp(1.5)
        },
      ]}
    >
      <View style={[Layout.rowSBCenter]}>
        <Text style={[Fonts.textBold, Fonts.textSmall, Fonts.textPrimary]}>
          {name}
        </Text>
        {/* <Pressable style={{}}>
                    <Text> Buyer</Text>
                </Pressable> */}
        <CustomButton
          textStyle={Fonts.textBold}
          style={[
            { height: hp(2.5), width: wp(15), borderRadius: RFPercentage(0.5) },
          ]}
          title={'BUYER'}
          type={TERTIARY}
        />
      </View>
      <Text style={[Fonts.textTiny, Fonts.textPrimary, Gutters.tinyTPadding]}>
        {number}
      </Text>
      <Text style={[Fonts.textTiny, Fonts.textPrimary, Gutters.tinyTPadding]}>
        {mail}
      </Text>
    </CustomTouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
