import PropTypes from 'prop-types';
import React from 'react';
import {View, Image} from 'react-native';
import style from './style';

const userProfileImage = props => {
  return (
    <View
      style={[style.userImageContainer, {borderRadius: props.imageDimension}]}>
      <Image
        source={props.profileImage}
        type="image/webp"
        style={{
          width: props.imageDimension,
          height: props.imageDimension,
          borderRadius: props.imageDimension,
        }}
      />
    </View>
  );
};

userProfileImage.propTypes = {
  profileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
    .isRequired,
  imageDimension: PropTypes.number.isRequired,
};

export default userProfileImage;
