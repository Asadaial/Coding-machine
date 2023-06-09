import React, { useEffect } from 'react';
import { ActivityIndicator, Image, ImageBackground, View } from 'react-native';
import { useTheme } from '../../hooks';




const Splash = () => {
  const { Layout, Gutters,Images } = useTheme();

 

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      {/* <Brand /> */}
    <ImageBackground style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}} source={Images.splash.splash}  >
    
      <ActivityIndicator size={40} style={{alignSelf:"center"}} color="black" />
    </ImageBackground>
    </View>
  );
};

export default Splash;
