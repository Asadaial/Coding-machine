import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ExpandableParagraph  from '../expandableParagraph/ExpandableParagraph';

const ListNotification = ({ type = 'comment' }) => {
    // 4 params  note,mail,comment,call
  const { Colors, Layout, Gutters, Fonts } = useTheme();
  const Note = ({ name = '[Conversion Monster]', message = 'Test username ' }) => (
    <>
      <View style={[styles(Colors).rowListView,{paddingVertical:hp(1)}]}>
        <Text style={[{ color: Colors.primary }, Fonts.textBold]}>{name}:</Text>
        <Text style={{ color: Colors.primary }}>{message}</Text>
        {/* <ExpandableParagraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec magna nulla. Mauris rutrum sem et odio posuere, id condimentum enim pharetra. Fusce vehicula sagittis nunc non tempor. Integer euismod mauris quis tellus aliquam, vitae vestibulum sem efficitur. Phasellus in consectetur enim. Sed tincidunt nunc sed augue consequat rhoncus. Morbi sagittis sem quis ligula finibus dictum. Phasellus auctor tristique fringilla. Aenean sit amet orci orci. Suspendisse at risus mauris. Quisque gravida purus sed lorem posuere, ut congue tortor ultrices. Aliquam lacinia dapibus diam, sed interdum urna eleifend ut. Fusce ut nibh ex. Suspendisse ut felis auctor, cursus neque in, placerat tellus. Aliquam viverra, risus ac iaculis tincidunt, enim est malesuada nulla, sit amet commodo sem elit at mauris."
          maxHeight={100}
        /> */}
      </View>
    </>
  );
  const Email = ({}) => (
    <>
      <View style={{ paddingVertical: hp(1) }}>
        <View style={styles(Colors).rowListView}>
          <Text style={[{ color: Colors.primary }, Fonts.textBold]}>
            [conversion Monster]:
          </Text>
          <Text style={{ color: Colors.primary }}>EMAIL</Text>
        </View>
        <View style={styles(Colors).rowListView}>
          <Text style={[{ color: Colors.primary }, Fonts.textBold]}>To:</Text>
          <Text style={{ color: Colors.primary }}>js@conversion.com</Text>
        </View>
        <View style={styles(Colors).rowListView}>
          <Text style={[{ color: Colors.primary }, Fonts.textBold]}>
            Subject:
          </Text>
          <Text style={{ color: Colors.primary }}>Test Email</Text>
        </View>
        <View style={styles(Colors).rowListView}>
          <Text style={[{ color: Colors.primary }, Fonts.textBold]}>Note:</Text>
          <Text style={{ color: Colors.primary }}>This test email</Text>
        </View>
      </View>
    </>
  );
  const SmsComponent = ({}) => (
    <>
      <View>
        <View style={{ paddingVertical: hp(1) }}>
          <View style={styles(Colors).rowListView}>
            <Text style={[{ color: Colors.primary }, Fonts.textBold]}>
            [conversion Monster]:
            </Text>
            <Text style={{ color: Colors.primary }}>SMS</Text>
          </View>
          <View style={styles(Colors).rowListView}>
            <Text style={[{ color: Colors.primary }, Fonts.textBold]}>To:</Text>
            <Text style={{ color: Colors.primary }}>+123456789</Text>
          </View>
          <View style={styles(Colors).rowListView}>
            <Text style={[{ color: Colors.primary }, Fonts.textBold]}>
              Body:
            </Text>
            <Text style={{ color: Colors.primary }}>
              I am Interested in buying this property
            </Text>
          </View>
        </View>
      </View>
    </>
  );
  const CallComponent = ({}) => (
    <>
      <View>
        <View style={{ paddingVertical: hp(1) }}>
          <View style={styles(Colors).rowListView}>
            <Text style={[{ color: Colors.primary }, Fonts.textBold]}>
            [conversion Monster]:
            </Text>
            <Text style={{ color: Colors.primary }}>outbound Call</Text>
          </View>
          <View style={styles(Colors).rowListView}>
            <Text style={[{ color: Colors.primary }, Fonts.textBold]}>To:</Text>
            <Text style={{ color: Colors.primary }}>+123456789</Text>
          </View>
          <View style={styles(Colors).rowListView}>
            <Text style={[{ color: Colors.primary }, Fonts.textBold]}>
              Note:
            </Text>
            <Text style={{ color: Colors.primary }}>Test Call</Text>
          </View>
        </View>
      </View>
    </>
  );
  return (
    <View style={styles(Colors).mainView}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles(Colors).iconView}>
          <Text>
            <FontAwesome
              name={
                type == 'note'
                  ? 'sticky-note'
                  : type == 'mail'
                  ? 'envelope'
                  : type == 'comment'
                  ? 'comment'
                  : 'phone'
              } //"comment"//"sms"//"envelope"//"sticky-note"
              color={Colors.white}
              size={16}
              style={{ alignSelf: 'center' }}
            />
          </Text>
        </View>
        <View style={{ marginLeft: RFPercentage(1) }}>
          <Text style={[Fonts.textPrimaryRegular, Fonts.textBold]}>
            Jeremy Scinta
          </Text>
          <Text style={[Fonts.text12tiny, { color: Colors.primary }]}>
            Feb 21, 2023
          </Text>
        </View>
      </View>
      <View style={styles(Colors).bottomDivider} />
      {type == 'note' ? (
        <Note />
      ) : type == 'mail' ? (
        <Email />
      ) : type == 'comment' ? (
        <SmsComponent />
      ) : (
        <CallComponent />
      )}
    </View>
  );
};

export default ListNotification;

const styles = Colors =>
  StyleSheet.create({
    mainView: {
      backgroundColor: Colors.white,
      width: '95%',
      alignSelf: 'center',
      borderRadius: RFPercentage(1),
      height: 'auto',
      paddingVertical: RFPercentage(1),
      marginVertical:hp(0.5),
      paddingHorizontal: RFPercentage(1),
    },
    iconView: {
      width: RFPercentage(5),
      height: RFPercentage(5),
      borderRadius: RFPercentage(2.5),
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomDivider: {
      width: '100%',
      height: 1,
      backgroundColor: Colors.primary,
      marginTop: hp(1.5),
    },
    rowListView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: hp(0.5),
    },
  });
