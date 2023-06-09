import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import ListNotification from '../../components/ListNotifcation/ListNotification';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTheme } from '../../hooks';
import { RFPercentage } from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ActivityScreen = () => {
  const { Colors, Fonts, Layout } = useTheme();
  const Notifications = [
    { type: 'comment' },
    { type: 'note' },
    { type: 'mail' },
    { type: 'call' },
    { type: 'note' },
    { type: 'mail' },
  ];
  // 4 params  note,mail,comment,call

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('all');
  const [items, setItems] = useState([
    { label: 'All', value: 'all' },
    {
      label: 'Emails',
      value: 'mail',
      icon: () => (
        <FontAwesome
          name="envelope" //"comment"//"sms"//"envelope"//"sticky-note"
          color={Colors.primary}
          size={16}
          // style={{ alignSelf: 'center' }}
        />
      ),
    },
    {
      label: 'SMS',
      value: 'comment',
      icon: () => (
        <FontAwesome
          name="comment" //"comment"//"sms"//"envelope"//"sticky-note"
          color={Colors.primary}
          size={16}
          // style={{ alignSelf: 'center' }}
        />
      ),
    },
    {
      label: 'Notes',
      value: 'note',
      icon: () => (
        <FontAwesome
          name="sticky-note" //"comment"//"sms"//"envelope"//"sticky-note"
          color={Colors.primary}
          size={16}
          // style={{ alignSelf: 'center' }}
        />
      ),
    },
    {
      label: 'Calls',
      value: 'call',
      icon: () => (
        <FontAwesome
          name="phone" //"comment"//"sms"//"envelope"//"sticky-note"
          color={Colors.primary}
          size={16}
          // style={{ alignSelf: 'center' }}
        />
      ),
    },
  ]);
  const [arrayList, setArrayList] = useState(Notifications);

  const filteredData = useMemo(() => {
    if (value == 'all') return Notifications;
    return arrayList.filter(item => item.type.includes(value));
  }, [value]);

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        textStyle={{ color: Colors.primary, paddingVertical: 0 }}
        // containerStyle={{width:"50%"}}

        dropDownContainerStyle={{
          width: '50%',
          marginLeft: wp(1.9),
          borderColor: Colors.primary,
          zIndex: 5,
        }}
        style={{
          width: '50%',
          height: hp(7),
          alignSelf: 'flex-start',
          marginLeft: RFPercentage(1),
          backgroundColor: Colors.neutral,
          borderColor: Colors.primary,
          marginBottom: 5,
          zIndex: 5,
        }}
      />
      <ScrollView style={{ zIndex: -5 }} showsVerticalScrollIndicator={false}>
        <View style={{}}>
          {/* <View style={{flex:1}}>  */}
          {filteredData.map((item, index) => (
            <ListNotification type={item.type} key={index} />
          ))}
          {/* </View> */}

          <View style={{ height: hp(2) }} />
        </View>
      </ScrollView>
    </>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({});
