import { ThemeVariables } from '../../@types/theme';

export default function ({ }: ThemeVariables) {
  return {
    dummy: {
      profileWoman: require('./assets/images/dummyWoman.jpg')
    },
    splash: {
      splash: require('./assets/images/Splash.png')
    },
    icons: {
      colors: require('./assets/images/colorswatch.png'),
      send: require('./assets/images/send.png'),
      translate: require('./assets/images/translate.png'),
    },
  };
}
