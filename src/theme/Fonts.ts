/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';
import { ThemeVariables } from '../../@types/theme';

export default function ({ FontSize, Colors }: ThemeVariables) {
  return StyleSheet.create({
    errorTiny: {
      fontSize: FontSize.veryTiney,
      color: Colors.error,
    },
    logoutText: {
      fontSize: FontSize.small,
      // color: Colors.error,
    },
    textVeryTiny: {
      fontSize: 9,
    },
    text12tiny: {
      fontSize: FontSize.veryTiney
    },
    textTiny: {
      fontSize: FontSize.tiny,
      color: Colors.textTiny,
    },
    textSmall: {
      fontSize: FontSize.small,
      // color: Colors.textGray400,
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.textGray400,
    },
    // priamry regular
    textPrimaryRegular: {
      fontSize: FontSize.small,
      color: Colors.primary,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.textGray400,
    },
    textBold: {
      fontWeight: 'bold',
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    titleSmall: {
      fontSize: FontSize.small * 1.5,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    titleRegular: {
      fontSize: FontSize.regular * 1.5,
      fontWeight: 'bold',
      color: Colors.primary,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textError: {
      color: Colors.error,
    },
    textSuccess: {
      color: Colors.success,
    },
    textPrimary: {
      color: Colors.primary,
    },
    textLight: {
      color: Colors.textGray200,
    },
    textLobster: {
      fontFamily: 'lobster',
      fontWeight: 'normal',
    },
  });
}
