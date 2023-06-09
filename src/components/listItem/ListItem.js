import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import { RFPercentage } from 'react-native-responsive-fontsize';

const ListItem = ({ attribute, value, tags = [{},{}], showTags = false }) => {
  const { Gutters, Colors, Fonts, Layout, FontSize } = useTheme();
  return (
    <View style={{ flexDirection: 'row', marginTop: hp(0.8) }}>
      <Text
        style={[
          Fonts.textBold,
          Fonts.text12tiny,
          { color: Colors.primary, width: wp(20) },
        ]}
      >
        {attribute}:
      </Text>
      {!showTags ? (
        <>
          <Text style={[Fonts.text12tiny, { color: Colors.primary }]}>
            {value}
          </Text>
        </>
      ) : (
        <>
        {/* {
            Tags.map((item,index)=>(
                <View key={index}>

                </View>
            ))
        } */}
         <View
                  
                  style={[styles(Colors).tagsView, Layout.rowHCenter]}
                >
                  <Text style={[Fonts.text12tiny, { color: Colors.white }]}>
                   text
                  </Text>
                  <Entypo
                    size={FontSize.small}
                    color={Colors.white}
                    name={'cross'}
                  />
                </View>
         <View
                  
                  style={[styles(Colors).tagsView, Layout.rowHCenter]}
                >
                  <Text style={[Fonts.text12tiny, { color: Colors.white }]}>
                   text
                  </Text>
                  <Entypo
                    size={FontSize.small}
                    color={Colors.white}
                    name={'cross'}
                  />
                </View>
         <View
                  
                  style={[styles(Colors).tagsView, Layout.rowHCenter]}
                >
                  <Text style={[Fonts.text12tiny, { color: Colors.white }]}>
                   text
                  </Text>
                  <Entypo
                    size={FontSize.small}
                    color={Colors.white}
                    name={'cross'}
                  />
                </View>
         <View
                  
                  style={[styles(Colors).tagsView, Layout.rowHCenter]}
                >
                  <Text style={[Fonts.text12tiny, { color: Colors.white }]}>
                   text
                  </Text>
                  <Entypo
                    size={FontSize.small}
                    color={Colors.white}
                    name={'cross'}
                  />
                </View>
        </>
      )}
    </View>
  );
};

export default ListItem;

const styles = Colors =>
  StyleSheet.create({
    tagsView: {
      height: hp(3),
      backgroundColor: Colors.primary,
      borderRadius: RFPercentage(1),
      padding: RFPercentage(0.5),
      marginLeft:wp(1)
    },
  });
