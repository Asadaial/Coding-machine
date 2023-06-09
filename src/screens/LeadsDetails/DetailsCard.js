import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ListItem from '../../components/listItem/ListItem';

const DetailsCard = () => {
  const { Gutters, Colors, Fonts, Layout } = useTheme();
  const detailsData=[
    {
        attribute:"Type",
        value:"Buyer & Seller"
    },
    {
        attribute:"Stage",
        value:"New"
    },
    {
        attribute:"Source",
        value:"Conersion Monster"
    },
    {
        attribute:"Agent",
        value:"Jeremy Scinta"
    },
  ]
  return (
    <View style={[styles(Colors).mainView, Layout.selfCenter]}>
      <Text style={[Fonts.textBold,{color:Colors.primary},Fonts.textSmall]}>Details</Text>
      <View>
        {
            detailsData.map((item,index)=>{
                return(
                    <ListItem key={index} attribute={item.attribute} value={item.value} />
                )
            })
        }
        <ListItem attribute={"Tags"}  showTags={true} tags={"4567890"} />
      </View>
    </View>
  );
};

export default DetailsCard;

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
