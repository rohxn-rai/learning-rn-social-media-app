import React from 'react';
import {Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimension={48}
          />
          <View style={style.userTextContainer}>
            <Text style={style.username}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <View>
          <FontAwesomeIcon icon={faEllipsisH} size={24} color="#79869F" />
        </View>
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={style.userPostStats}>
        <View style={style.userPostStatsButtonFirst}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={style.userPostStatsText}>{props.likes}</Text>
        </View>
        <View style={style.userPostStatsButton}>
          <FontAwesomeIcon icon={faComment} color="#79869F" />
          <Text style={style.userPostStatsText}>{props.comments}</Text>
        </View>
        <View style={style.userPostStatsButton}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={style.userPostStatsText}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
  profileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
    .isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;
