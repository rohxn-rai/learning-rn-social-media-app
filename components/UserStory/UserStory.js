import React from 'react';
import PropTypes from 'prop-types';
import {Image, View, Text} from 'react-native';
import style from './style';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image
          source={props.profileImage}
          type="image/webp"
          style={style.userStory}
        />
      </View>
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
    .isRequired,
};

export default UserStory;
