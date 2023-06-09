import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Brand } from '../../components';
import { setDefaultTheme } from '../../store/theme';
import { ApplicationScreenProps } from '../../../@types/navigation';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import CustomButton from '../../components/customButton/CustomButton';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomKeyboardAwareScrollView from '../../components/keyboardAwareScrollView/KeyboardAwareScrollView';
import KeyboardDismissContainer from '../../components/keyboardDismissContainer/KeyboardDismissContainer';
import { HOME_ROUTE } from '../../utils/Constants';

const LoginScreen = ({ navigation }: ApplicationScreenProps) => {
  const { Layout, Fonts, Gutters, Colors } = useTheme();

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 100),
    );
    await setDefaultTheme({ theme: 'default', darkMode: null });
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  useEffect(() => {
    // init();
  }, []);

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <CustomKeyboardAwareScrollView>
        <KeyboardDismissContainer
        style={{}}
        >
          <View style={{ width: "90%", alignSelf: "center", justifyContent: "center", }}>
            <Text style={[Fonts.titleSmall, Layout.selfCenter, { marginTop: hp(3) }]}>
              POCKET ISAi
            </Text>
            <View style={[Layout.center, { alignItems: "center", justifyContent: "center", marginTop: hp(5), marginBottom: hp(3) }]}>
              <Text style={[Fonts.titleRegular,]}>WELCOME BACK</Text>
              <Text style={[Fonts.textTiny, { marginTop: hp(1) }]}>Login with your credentials</Text>
            </View>
            <CustomTextInput
              label={"Username"}
              placeholder={"jhon doe"}

            />
            <CustomTextInput
              label={"Password"}
              placeholder={"*********"}
              isPassword
              style={{ marginTop: hp(3) }}
            />
            <Text onPress={() => console.log("forgot password pressed")} style={[Fonts.textPrimaryRegular, Layout.selfCenter, { marginVertical: hp(2) }]}>Forgot password?</Text>
            <CustomButton
              style={{ width: "50%", height: 35, alignSelf: "center", borderRadius: 30 }}
              onPress={() => navigation.navigate("Main")}
              title={"LOGIN"}
            />
          </View>
        </KeyboardDismissContainer>
      </CustomKeyboardAwareScrollView>
    </View>
  );
};

export default LoginScreen;



