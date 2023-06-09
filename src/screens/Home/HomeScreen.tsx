import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Header from './Header';
import ListItem from './ListItem';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Frame from '../../components/Frame/Frame';
import { LEADS_DETAILS_ROUTE } from '../../../src/utils/Constants';
import CustomButton from '../../components/customButton/CustomButton';

const HomeScreen = () => {
  const list = [{}, {}, {}, {}, {}, {}, {}];
  const navigation = useNavigation();
  return (
    <Frame showTopTabBar={true}>
      {/* <View style={{ flex: 1 }}> */}
      {/* <Header style={{}} /> */}
      {/* main body */}
      <View style={{ marginTop: hp(4) }}>
        <>
          <ScrollView>
            {list.map((item, index) => (
              <ListItem
                onPress={() => {
                  navigation.navigate(LEADS_DETAILS_ROUTE);
                }}
                key={index}
              />
            ))}
            <View style={{ marginBottom: hp(2) }} />
          </ScrollView>
        </>
      </View>
      {/* </View> */}
     
    </Frame>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
