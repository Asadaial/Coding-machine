import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Pressable,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { useLazyFetchOneQuery } from '../../services/modules/users';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import CustomKeyboardAwareScrollView from '../../components/keyboardAwareScrollView/KeyboardAwareScrollView';
import KeyboardDismissContainer from '../../components/keyboardDismissContainer/KeyboardDismissContainer';
import {
  ALT_EMAIL,
  EMAIL,
  FIRST_NAME,
  HOME_PHONE,
  LAST_NAME,
  LEAD_SOURCE,
  LEAD_TYPE,
  MOBILE_PHONE,
  WORK_PHONE,
} from '../../utils/Constants';
import { mockupSchema } from '../../utils/ValidationSchema';
import { Formik } from 'formik';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../../components/customButton/CustomButton';
import Frame from '../../components/Frame/Frame';

const Example = () => {
  const { t } = useTranslation(['example', 'welcome']);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();
  const dispatch = useDispatch();

  const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
    useLazyFetchOneQuery();

  useEffect(() => {
    if (isSuccess && data?.name) {
      Alert.alert(t('example:helloUser', { name: data.name }));
    }
  }, [isSuccess, data]);

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };
  const handleForm = (data: object) => {
    // {"email": "aiakhokhar@gmail.com", "password": "Test@123"}
    console.log(data);
  };
  return (
    <Frame>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <CustomKeyboardAwareScrollView>
          <KeyboardDismissContainer style={{}}>
            <View style={{ width: '95%', alignSelf: 'center' }}>
              <Formik
                initialValues={{
                  [LEAD_SOURCE]: '',
                  [LEAD_TYPE]: '',
                  [EMAIL]: '',
                  [FIRST_NAME]: '',
                  [LAST_NAME]: '',
                  [ALT_EMAIL]: '',
                  [HOME_PHONE]: '',
                  [MOBILE_PHONE]: '',
                  [WORK_PHONE]: '',
                }}
                onSubmit={handleForm}
                validationSchema={mockupSchema}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  touched,
                  values,
                  errors,
                }) => (
                  <>
                    <CustomTextInput
                      label="Lead Source"
                      onChangeText={handleChange(LEAD_SOURCE)}
                      onBlur={handleBlur(LEAD_SOURCE)}
                      error={touched[LEAD_SOURCE] && errors[LEAD_SOURCE]}
                      value={values[LEAD_SOURCE]}
                    />
                    <CustomTextInput
                      label="LEAD TYPE"
                      onChangeText={handleChange(LEAD_TYPE)}
                      onBlur={handleBlur(LEAD_TYPE)}
                      error={touched[LEAD_TYPE] && errors[LEAD_TYPE]}
                      value={values[LEAD_TYPE]}
                    />
                    <CustomTextInput
                      label="Email"
                      onChangeText={handleChange(EMAIL)}
                      onBlur={handleBlur(EMAIL)}
                      error={touched[EMAIL] && errors[EMAIL]}
                      value={values[EMAIL]}
                    />
                    <CustomTextInput
                      label="First Name"
                      onChangeText={handleChange(FIRST_NAME)}
                      onBlur={handleBlur(FIRST_NAME)}
                      error={touched[FIRST_NAME] && errors[FIRST_NAME]}
                      value={values[FIRST_NAME]}
                    />
                    <CustomTextInput
                      label="Last Name"
                      onChangeText={handleChange(LAST_NAME)}
                      onBlur={handleBlur(LAST_NAME)}
                      error={touched[LAST_NAME] && errors[LAST_NAME]}
                      value={values[LAST_NAME]}
                    />
                    <CustomTextInput
                      label="Alternate Email"
                      onChangeText={handleChange(ALT_EMAIL)}
                      onBlur={handleBlur(ALT_EMAIL)}
                      error={touched[ALT_EMAIL] && errors[ALT_EMAIL]}
                      value={values[ALT_EMAIL]}
                    />
                    <CustomTextInput
                      label="Home Phone"
                      onChangeText={handleChange(HOME_PHONE)}
                      onBlur={handleBlur(HOME_PHONE)}
                      error={touched[HOME_PHONE] && errors[HOME_PHONE]}
                      value={values[HOME_PHONE]}
                    />
                    <CustomTextInput
                      label="Mobile Phone"
                      onChangeText={handleChange(MOBILE_PHONE)}
                      onBlur={handleBlur(MOBILE_PHONE)}
                      error={touched[MOBILE_PHONE] && errors[MOBILE_PHONE]}
                      value={values[MOBILE_PHONE]}
                    />
                    <CustomTextInput
                      label="WORK PHONE"
                      onChangeText={handleChange(WORK_PHONE)}
                      onBlur={handleBlur(WORK_PHONE)}
                      error={touched[WORK_PHONE] && errors[WORK_PHONE]}
                      value={values[WORK_PHONE]}
                    />
                    <CustomButton title={'Submit'} />
                  </>
                )}
              </Formik>
            </View>
          </KeyboardDismissContainer>
        </CustomKeyboardAwareScrollView>
      </View>
    </Frame>
  );
};

export default Example;

{
  /* <View
style={[
  Layout.row,
  Layout.justifyContentBetween,
  Layout.fullWidth,
  Gutters.smallTMargin,
]}
>
<TouchableOpacity
  style={[Common.button.circle, Gutters.regularBMargin]}
  onPress={() => fetchOne(`${Math.ceil(Math.random() * 10 + 1)}`)}
>
  {isFetching || isLoading ? (
    <ActivityIndicator />
  ) : (
    <Image
      source={Images.icons.send}
      style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
    />
  )}
</TouchableOpacity>

<TouchableOpacity
  style={[Common.button.circle, Gutters.regularBMargin]}
  onPress={() => onChangeTheme({ darkMode: !isDark })}
>
  <Image
    source={Images.icons.colors}
    style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
  />
</TouchableOpacity>

<TouchableOpacity
  style={[Common.button.circle, Gutters.regularBMargin]}
  onPress={() =>
    onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')
  }
>
  <Image
    source={Images.icons.translate}
    style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
  />
</TouchableOpacity>
</View> */
}

// <CustomKeyboardAwareScrollView>
// <KeyboardDismissContainer
//   style={{}}
// >
// <Formik
//   // initialValues={{ [EMAIL]: "", [PASSWORD]: "" }}
//   initialValues={{ [LEAD_SOURCE]: "", [LEAD_TYPE]: "" }}
//   onSubmit={handleForm}
//   validationSchema={mockupSchema}
// >
//   {({
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     touched,
//     values,
//     errors,
//   }) => (
//     <>
//       <CustomTextInput
//         label="Lead Source"
//         onChangeText={handleChange(LEAD_SOURCE)}
//         onBlur={handleBlur(LEAD_SOURCE)}
//         error={touched[LEAD_SOURCE] && errors[LEAD_SOURCE]}
//         value={values[LEAD_SOURCE]}
//       />
//       <CustomTextInput
//         label="LEAD_TYPE"
//         onChangeText={handleChange(LEAD_TYPE)}
//         onBlur={handleBlur(LEAD_TYPE)}
//         error={touched[LEAD_TYPE] && errors[LEAD_TYPE]}
//         value={values[LEAD_TYPE]}
//       />
//       {/* <CustomTextInput
//           label="Email"
//           onChangeText={handleChange(LEAD_SOURCE)}
//           onBlur={handleBlur(LEAD_SOURCE)}
//           error={touched[LEAD_SOURCE] && errors[LEAD_SOURCE]}
//           value={values[LEAD_SOURCE]}
//         /> */}
//       <Pressable
//         onPress={handleSubmit}
//         style={{ width: wp(40), height: hp(5), backgroundColor: "red", marginBottom: hp(2), justifyContent: "center", alignItems: "center" }}>
//         <Text style={{ alignSelf: "center" }}>Continue</Text>
//       </Pressable>
//     </>
//   )}
// </Formik>

// </KeyboardDismissContainer>
// </CustomKeyboardAwareScrollView>
