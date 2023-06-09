import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../hooks'
import { SearchIcon } from '../../theme/assets/Svgs/Icons'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { RFPercentage } from 'react-native-responsive-fontsize'
import CustomTextInput from '../customTextInput/CustomTextInput'

const SearchBar = () => {
    const {Colors}=useTheme()
  return (
    <View style={{width:"90%",height:hp(5),backgroundColor:Colors.white,borderRadius:RFPercentage(1.5),overflow:"hidden",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <CustomTextInput
      bottomBorder={false}
      style={{height:hp(5),}}
      />      
      <SearchIcon onPress={()=>console.log("56789")} style={{width:RFPercentage(3),height:RFPercentage(3),marginRight:RFPercentage(2)}}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})