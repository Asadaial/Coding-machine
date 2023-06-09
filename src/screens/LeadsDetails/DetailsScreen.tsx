import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from './Header';
import MainCard from './MainCard';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DetailsCard from './DetailsCard';
import SearchCriteria from './SearchCriteria';
import CustomFields from './CustomFields';

const DetailsScreen = () => {
  return (
    <View style={{flex:1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainCard />
        <DetailsCard />
        <SearchCriteria />
        <CustomFields />
        {/* <View style={{ height: hp(25) }} /> */}
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
