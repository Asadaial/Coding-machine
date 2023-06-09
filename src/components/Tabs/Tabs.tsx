import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { scale } from '../../../../../../../utils/utils';

import PropTypes from 'prop-types';
import CustomTouchableOpacity from '../touchableOpacity/CustomTouchableOpacity';
import { useTheme } from '../../hooks';
import { RFPercentage } from 'react-native-responsive-fontsize';
// import theme from "../../../../../../../theme/theme";

const Tabs = ({ list, currentTab, changeTab }:{list:any,currentTab:any,changeTab:any}) => {
  const { Colors, Layout, Fonts } = useTheme();
  const isActive = useCallback(
   ( value:any )=> {
      return currentTab === value;
    },
    [currentTab],
  );
  return (
    <View style={[styles(Colors).wrapper]}>
      {list.map((tab:any, position:any) => (
        <CustomTouchableOpacity
          onPress={changeTab.bind(null, tab.value)}
          style={styles(isActive(tab.value), Colors).mainView}
          key={position + tab.value}
        >
          <Text
            style={[Fonts.text12tiny, styles(isActive(tab.value), Colors).tab]}
          >
            {tab.name}
          </Text>
          {/* {isActive(tab.value) && <View style={styles().indicator} />} */}
        </CustomTouchableOpacity>
      ))}

    </View>
  );
};

const styles = (active:any, Colors:any) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      //  backgroundColor:"red",
      marginVertical: 20,
     
    },
    mainView: {
      backgroundColor: active ? '#1F73BB' : '#ffffff',
      paddingVertical: RFPercentage(1), //scale(5),
      paddingHorizontal: RFPercentage(2), //scale(5),
      borderRadius: RFPercentage(8), //scale(20)
    },

    tab: {
      color: active ? '#ffffff' : '#A1A1A1',
    //   paddingLeft: RFPercentage(3), //scale(6, true),
    //   paddingRight: RFPercentage(4.5), //scale(11, true),
    paddingHorizontal:RFPercentage(4)
    },
  });
};

Tabs.propTypes = {
  list: PropTypes.array.isRequired,
  currentTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func,
};

Tabs.defautProps = {
  changeTab: () => {},
};

export default Tabs;
