import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks';
import { RFPercentage } from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const MainCard = () => {
  const { Gutters, Colors, Fonts, Layout } = useTheme();
  const mails = [{}, {}];
  const numbers = [{}, {}, {}];
  return (
    <View style={[styles(Colors).mainView, Layout.selfCenter]}>
      <View style={{ width: '70%' }}>
        <View style={styles(Colors).firstView}>
          <FontAwesome
            name="envelope"
            color={Colors.white}
            size={RFPercentage(2.2)}
            style={styles(Colors).iconStyle}
          />
          <View>
            {mails.map((item, index) => {
              return (
                <Text
                  key={index}
                  style={[
                    Fonts.text12tiny,
                    Fonts.textBold,
                    { color: Colors.white },
                  ]}
                >
                  js@conversion-monster.com
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles(Colors).secondView}>
          <FontAwesome
            color={Colors.white}
            name="phone"
            size={RFPercentage(2.2)}
            style={styles(Colors).iconStyle}
          />
          <View>
            {numbers.map((item,index) => {
              return (
                <Text
                key={index}
                  style={[
                    Fonts.text12tiny,
                    Fonts.textBold,
                    { color: Colors.white },
                  ]}
                >
                  +1(323)453-1235 (Home)
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles(Colors).thirdView}>
          <FontAwesome
            color={Colors.white}
            name="home"
            size={RFPercentage(2.2)}
            style={styles(Colors).iconStyle}
          />
          <View>
            <Text
              style={[
                Fonts.text12tiny,
                Fonts.textBold,
                { color: Colors.white },
              ]}
            >
              3569 Station Street New York, New York, 99205
            </Text>
          </View>
        </View>
      </View>
      <View style={{}}>
        <Text
          style={[Fonts.text12tiny, Fonts.textBold, { color: Colors.white }]}
        >
          May 4th, 2023
        </Text>
      </View>
    </View>
  );
};

export default MainCard;

const styles = Colors =>
  StyleSheet.create({
    mainView: {
      width: '90%',
      backgroundColor: Colors.primary,
      borderRadius: RFPercentage(2),
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: wp(2),
      padding: RFPercentage(2),
    },
    iconStyle: {
      marginRight: RFPercentage(1),
    },
    firstView: {
      flexDirection: 'row',

      marginTop: RFPercentage(1),
    },
    secondView: {
      flexDirection: 'row',
      width: '80%',
      marginTop: RFPercentage(2),
    },
    thirdView: {
      flexDirection: 'row',
      width: '70%',
      marginTop: RFPercentage(2),
    },
  });
