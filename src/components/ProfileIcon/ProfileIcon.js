import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useTheme } from '../../hooks'


const ProfileIcon = () => {
    const { Colors ,Images} = useTheme()
    return (
        <View style={{ width: RFPercentage(4), height: RFPercentage(4), borderRadius: RFPercentage(2), borderWidth: 2, borderColor: Colors.white,overflow:"hidden"}}>
            <Image
                source={Images.dummy.profileWoman}
                resizeMode='contain'
                style={{width:34,height:25}}
                // style={{width:}}
            />
        </View>
    )
}

export default ProfileIcon

const styles = StyleSheet.create({})