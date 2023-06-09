import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
// import { scale } from "../../../utils/utils";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useTheme } from "../../hooks";
import { useRef } from "react";
import Feather from 'react-native-vector-icons/Feather'


const CustomTextInput = ({
    label,
    error,
    multiline,
    numberOfLines,
    style,
    pressableProps,
    isPassword,
    placeholder,
   bottomBorder=true,
    ...props
}) => {
    const ref = useRef(null);
    const {
        Common,
        Fonts,
        Gutters,
        Layout,
        Images,
        Colors,
        darkMode: isDark,
    } = useTheme();
    const [showPass,setShowPass]=useState(true)
    return (
        <View style={style}>
            <Pressable
                style={styles(multiline, numberOfLines, Colors,bottomBorder).container}
                onPress={() => ref.current.focus()}
                {...pressableProps}
            >
                {label && (
                    <Text style={[Fonts.textLeft, { color: Colors.primary }
                        //  styles(Colors).label
                    ]
                    }>{label}</Text>
                )}
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingRight:3}}>
                <TextInput
                    style={[
                        // theme.typography.h3m,
                        styles(multiline, numberOfLines, Colors).textInput,
                    ]}
                    selectionColor={Colors.textGray800}
                    ref={ref}
                    autoCapitalize="none"
                    autoCorrect={false}
                    multiline={multiline}
                    secureTextEntry={isPassword && showPass?true:false}
                    numberOfLines={numberOfLines}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.primary}
                    {...props}
                />
                {
                    isPassword && <>
                    <Feather name={showPass?"eye-off":"eye"} onPress={()=>{setShowPass(!showPass)}} style={{marginLeft:5,padding:5}} size={20} color={Colors.primary} />    
                    </>
                }
                </View>
            </Pressable>
            {error && (
                <Text style={[Fonts.errorTiny,
                    // { color: Colors.error }
                ]}>
                    {error}
                </Text>
            )}
        </View>
    );
};

const styles = (multiline, numberOfLines, Colors,bottomBorder) =>
    StyleSheet.create({
        container: {
            minHeight:bottomBorder? RFPercentage(7):RFPercentage(4),
            justifyContent: "center",
            paddingHorizontal: RFPercentage(2),
            paddingVertical:bottomBorder? multiline && numberOfLines ? RFPercentage(4) : RFPercentage(0):0,
            backgroundColor: Colors.inputBackground,
            // backgroundColor:"red",
            borderColor: Colors.primary,
            borderBottomWidth:bottomBorder?1: 0,
            borderWidth: multiline  ? 1 : 0
        },
        // label: {
        // //   color:Colors.darkGrey,
        // },
        textInput: {
            height:
                multiline && numberOfLines ? RFPercentage(numberOfLines * 5) : RFPercentage(5),
            padding: 0,
            margin: 0,
           
            width:"90%",
            color: Colors.primary,
            textAlignVertical: multiline && numberOfLines ? "top" : undefined,
        },
    });



export default CustomTextInput;
