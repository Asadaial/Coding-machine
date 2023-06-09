import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ListItem from '../../components/listItem/ListItem';

const SearchCriteria = () => {
  const { Gutters, Colors, Fonts, Layout } = useTheme();
  const detailsData=[
    {
        attribute:"Area",
        value:"XYZ"
    },
    {
        attribute:"Price Point",
        value:"500k-1M"
    },
    {
        attribute:"Property Type",
        value:"Residential"
    },
    {
        attribute:"Amenities",
        value:"XYZ"
    },
  ]
  return (
    <View style={[styles(Colors).mainView, Layout.selfCenter]}>
      <Text style={[Fonts.textBold,{color:Colors.primary},Fonts.textSmall]}>Search Criteria</Text>
      <View>
        {
            detailsData.map((item,index)=>{
                return(
                    <ListItem key={index} attribute={item.attribute} value={item.value} />
                )
            })
        }
      
      </View>
    </View>
  );
};

export default SearchCriteria;

const styles = Colors =>
  StyleSheet.create({
    mainView: {
      width: '90%',
      backgroundColor: Colors.white,
      borderRadius: RFPercentage(2),

      justifyContent: 'space-between',
      paddingHorizontal: wp(2),
      padding: RFPercentage(2),
      marginTop: hp(2),
    },
  });
