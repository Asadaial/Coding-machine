import React from "react";
import PropTypes from "prop-types";
import { useRoute } from "@react-navigation/native";
import CustomLink from "../link/CustomLink";
import { RFPercentage } from "react-native-responsive-fontsize";
// import { scale } from "../../../utils/utils";

const MenuLink = ({ to, Icon, ActiveIcon }) => {
  const widthAndHeightProps = { width: RFPercentage(5), height:RFPercentage(5) };
  const route = useRoute();

  const match = to.screen === route.name;

  return (
    <CustomLink to={to}>
      {match ? (
        <ActiveIcon   style={{width: RFPercentage(4), height:RFPercentage(4),}}//{...widthAndHeightProps}
        
        />
      ) : (
        <Icon 
        style={{width: RFPercentage(4), height:RFPercentage(4)}}
        // {...widthAndHeightProps}
         />
      )}
    </CustomLink>
  );
};

MenuLink.propTypes = {
  to: PropTypes.object.isRequired,
  Icon: PropTypes.elementType.isRequired,
  ActiveIcon: PropTypes.elementType.isRequired,
};

export default MenuLink;
