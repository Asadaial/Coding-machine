import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Text, StatusBar } from 'react-native';
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from '@react-navigation/native';

// import AvatarLink from '../avatarlink/AvatarLink';
import MenuLink from '../menuLink/MenuLink';

import CustomTouchableOpacity from '../touchableOpacity/CustomTouchableOpacity';
// import {
//   MOOD_DIARY_ROUTE,
//   HOME_ROUTE,
//   MORE_ROUTE,
//   SCROLL_VIEW,
//   THERAPIES_ROUTE,
//   VIEW,
//   PERSONAL_SESSION_ROUTE,
// } from '../../../utils/constants';
import {
  HOME_ROUTE,
  MORE_ROUTE,
  SCROLL_VIEW,
  VIEW,
  PERSONAL_SESSION_ROUTE,
  THERAPIES_ROUTE,
  MOOD_DIARY_ROUTE,
  DETAILS_ROUTE,
  LEADES_FORM,
} from '../../utils/Constants';
import { useDispatch } from 'react-redux';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  ArrowBackIcon,
  GearActive,
  GearInActive,
  HomeIcon,
  HomeIconActive,
  MessageActive,
  MessageInActive,
  MoreIcon,
  MoreIconActive,
  UserActive,
  UserInActive,
} from '../../theme/assets/Svgs/Icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../../screens/Home/Header';
import HeaderBack from '../../screens/LeadsDetails/Header';

const LINKS = [
  { to: HOME_ROUTE, icon: UserInActive, activeIcon: UserActive },
  //   { to: DETAILS_ROUTE, icon: TherapiesIcon, activeIcon: TherapiesActiveIcon },
  //   { to: MOOD_DIARY_ROUTE, icon: DiaryIcon, activeIcon: DiaryActiveIcon },
  {
    to: LEADES_FORM,
    icon: MessageInActive,
    activeIcon: MessageActive,
  },
  { to: MORE_ROUTE, icon: GearInActive, activeIcon: GearActive },
];

const Frame = ({
  children,
  mode,
  hideBottomNav,
  hideAvatar,
  rightComponent: RightComp,
  hideBackButton,
  showTopTabBar=false
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  // useEffect(() => {
  //   dispatch(getUserAction());
  // }, [dispatch]);

  const thereIsBackButton = !LINKS.map(l => l.to).includes(route.name);

  const content =
    mode === SCROLL_VIEW ? (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {children}
      </ScrollView>
    ) : (
      <View style={styles.container}>{children}</View>
    );

  return (
    isFocused && (
      <>
    
        {showTopTabBar && (
          <View style={styles.topBar}>
            {!hideBackButton && (
              <View style={{width:"100%",zIndex:10}}>
                {thereIsBackButton ? (
                  <HeaderBack style={{ paddingTop:10 }} />
                ) : (
                 
                  <>
                    <Header style={{width:"100%",}} />
                  </>
                )}
              </View>
            )}
            {/* {!(hideAvatar || RightComp) && <AvatarLink />} */}
            {/* {RightComp && RightComp} */}
          </View>
        )}

        {content}
        {!hideBottomNav && (
          <View style={styles.nav}>
            {LINKS.map((l, i) => (
              <MenuLink
                key={i}
                to={{ screen: l.to }}
                Icon={l.icon}
                ActiveIcon={l.activeIcon}
              />
            ))}
          </View>
        )}
      </>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.palette.veryLightGrey,
  },
  contentContainer: { flexGrow: 1 },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: RFPercentage(2), // scale(20, true),
    paddingBottom: RFPercentage(0), // scale(12),
    backgroundColor: 'white',

    height: hp(8),
    alignItems: 'center',
    // borderTopLeftRadius: RFPercentage(2),
    // borderTopRightRadius: RFPercentage(2),
    overflow: 'hidden',
    // borderTopWidth: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex:10
    // paddingVertical: RFPercentage(10), // scale(10),
    // paddingHorizontal: RFPercentage(5), // scale(20, true),
    // backgroundColor: theme.palette.veryLightGrey,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});

Frame.propTypes = {
  children: PropTypes.node,
  hideBottomNav: PropTypes.bool,
  hideAvatar: PropTypes.bool,
  mode: PropTypes.oneOf([VIEW, SCROLL_VIEW]),
  rightComponent: PropTypes.any,
  hideBackButton: PropTypes.bool,
};

Frame.defaultProps = {
  mode: SCROLL_VIEW,
  hideBackButton: false,
};

export default Frame;
