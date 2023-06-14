import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
// import theme from "../../../theme/theme";
import {
    PRIMARY,
    QUATERNARY,
    SECONDARY,
    TERTIARY,
} from '../../utils/Constants'
import { RFPercentage } from "react-native-responsive-fontsize";
import CustomTouchableOpacity from "../touchableOpacity/CustomTouchableOpacity";
import { useTheme } from "../../hooks";


const CustomButton = ({
    title,
    type,
    onPress,
    disabled,
    isLoading,
    style,
    textStyle,
    IconLeft,
    styleText,
    ...rest
}) => {
    const {
        Colors,
        Fonts,
        Layout,
        Common
    } = useTheme()
    const getTypography = (type) => {
        return type === TERTIARY?Fonts.textVeryTiny: type === QUATERNARY ? Fonts.textPrimary : Fonts.textPrimary;
    };

    const getActivityIndicatorColor = (type) => {
        let color;
        switch (type) {
            case SECONDARY:
                color = Colors.secondary;
                break;
            case TERTIARY:
                color = Colors.tertiary;
                break;
            case QUATERNARY:
                color = Colors.white;
                break;
            default:
                color = Colors.white;
                break;
        }

        return color;
    };

    return (
        <CustomTouchableOpacity
            style={[styles(type, disabled).button, style]}
            disabled={isLoading || disabled}
            onPress={!isLoading && !disabled ? onPress : undefined}
        >
            {isLoading && !disabled ? (
                <ActivityIndicator color={getActivityIndicatorColor(type)} />
            ) : (
                <Text style={[getTypography(type), styles(type, disabled).buttonText,textStyle,styleText]}>
                   {IconLeft} {title}
                </Text>
            )}
        </CustomTouchableOpacity>
    );
};

export const styles = (type, disabled) => {
    const {
        Colors,
        Fonts,
        Layout,
        Common
    } = useTheme()
    const eitherGreenOrGrey = disabled ? Colors.neutral : Colors.primary;
    const height = RFPercentage(7);

    const common = {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    };
    let style = {
        button: {
            ...common,
            backgroundColor: eitherGreenOrGrey,
            height,
        },
        buttonText: {
            color: Colors.white,
        },
    };

    if (type === SECONDARY) {
        style = {
            button: {
                ...common,
                backgroundColor: Colors.transparent,
                height,
                borderWidth: 2,
                borderColor: eitherGreenOrGrey,
            },
            buttonText: {
                color: eitherGreenOrGrey,
            },
        };
    } else if (type === TERTIARY) {
        style = {
            button: {
                ...common,
                backgroundColor: disabled ? Colors.neutral : Colors.secondary,
                height,
            },
            buttonText: {
                color: disabled ? Colors.textGray200 : Colors.white,
            },
        };
    } else if (type === QUATERNARY) {
        style = {
            button: {
                ...common,
                backgroundColor: Colors.white,
                height,
            },
            buttonText: {
                color: disabled ? Colors.textGray800 : Colors.text,
            },
        };
    }

    return StyleSheet.create(style);
};

CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([PRIMARY, SECONDARY, TERTIARY, QUATERNARY]).isRequired,
    isLoading: PropTypes.bool.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool.isRequired,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.objectOf),
    ]),
};

CustomButton.defaultProps = {
    type: PRIMARY,
    isLoading: false,
    disabled: false,
};

export default CustomButton;
