import { ThemeVariables } from '../../@types/theme';

export default function ({ }: ThemeVariables) {
  return {
    dummy: {
      profileWoman: require('./assets/images/dummyWoman.jpg')
    },
    splash: {
      splash: require('./assets/images/Splash.png')
    },
    Drawer: {
   DrawerHeader:require('./assets/images/DrawerHeader.png')

    },
  };
}
