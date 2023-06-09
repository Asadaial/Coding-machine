import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ListItem from '../../components/listItem/ListItem';

const CustomFields = () => {
  const { Gutters, Colors, Fonts, Layout } = useTheme();
  const detailsData=[
    {
        attribute:"Website",
        value:"abc.com"
    },
    {
        attribute:"Birth Date",
        value:"4th Dec, 1996"
    },
    {
        attribute:"Close Date",
        value:"3rd May, 2030"
    },
    {
        attribute:"Spouse Name",
        value:"Dona Paulson"
    },
  ]
  return (
    <View style={[styles(Colors).mainView, Layout.selfCenter]}>
      <Text style={[Fonts.textBold,{color:Colors.primary},Fonts.textSmall]}>Custom Fields</Text>
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

export default CustomFields;

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
