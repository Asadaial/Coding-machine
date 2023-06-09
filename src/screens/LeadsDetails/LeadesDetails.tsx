import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from './Header';
import MainCard from './MainCard';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DetailsCard from './DetailsCard';
import SearchCriteria from './SearchCriteria';
import CustomFields from './CustomFields';
import { ACTIVITY, DETAILS, VIEW } from '../../utils/Constants';
import DetailsScreen from './DetailsScreen';
import ActivityScreen from './ActivityScreen';
import Tabs from '../../components/Tabs/Tabs';
import CustomButton from '../../components/customButton/CustomButton';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Frame from '../../components/Frame/Frame';

const LeadesDetails = () => {
  const [currentTab, changeTab] = useState(DETAILS);
  const tabs = [
    {
      name: 'Details',
      value: DETAILS,
    },
    {
      name: 'Activity',
      value: ACTIVITY,
    },
  ];
  let content;
  if (currentTab === DETAILS) {
    content = <DetailsScreen />;
  } else if (currentTab === ACTIVITY) {
    content = <ActivityScreen />;
  }

  return (
    <Frame mode={VIEW} showTopTabBar={true}>
      {/* <View  style={{height:RFPercentage(2)}} /> */}
      {/* <Header style={{ paddingTop:hp(2) }} /> */}
      <Tabs list={tabs} currentTab={currentTab} changeTab={changeTab} />

      {/* <CustomButton
     onPress={()=>console.log("Here is my bnutton")}
     title={"Test Button"}
     /> */}
      {content}
    </Frame>
  );
};

export default LeadesDetails;

const styles = StyleSheet.create({});
