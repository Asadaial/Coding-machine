import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon'
import { useNavigation } from '@react-navigation/native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useTheme } from '../../hooks'
import CustomTouchableOpacity from '../../components/touchableOpacity/CustomTouchableOpacity'
import Feather from 'react-native-vector-icons/Feather'

const HeaderBack = ({
    style
}:{
    style:any
}) => {
    const navigation = useNavigation()
    const {
        Fonts,
        Colors,
        darkMode
    } = useTheme()
    return (
        <View style={style}>
            {/* <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} /> */}
            <View style={{ flexDirection: "row", paddingHorizontal: wp(4), justifyContent: "space-between", marginTop: hp(0) }}>
                <CustomTouchableOpacity onPress={() =>navigation.goBack()} style={{width:RFPercentage(6),height:RFPercentage(5),justifyContent:"center",alignItems:"center"}} >
                <Feather name={"arrow-left"} size={RFPercentage(4)} />
                </CustomTouchableOpacity>
                <Text style={[Fonts.textRegular, Fonts.textBold, { color: Colors.primary }]}>Jeremy Scinta</Text>
                <ProfileIcon />
            </View>
        </View>
    )
}

export default HeaderBack

const styles = StyleSheet.create({})