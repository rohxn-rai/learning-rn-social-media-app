import React from 'react';
import PropTypes from 'prop-types';
import {Image, View, Text} from 'react-native';
import style from './style';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <Image source={props.profileImage} type="image/webp" />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
};

export default UserStory;
