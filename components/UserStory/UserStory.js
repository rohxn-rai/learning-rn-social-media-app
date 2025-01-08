import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={props.profileImage} imageDimension={65} />
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
