/* eslint-disable quotes */
import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStlye';
import UserStory from './components/UserStory/UserStory';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstName: 'Nino',
      id: 7,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstName: 'Nana',
      id: 8,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstName: 'Adam',
      id: 9,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
  ];
  return (
    <SafeAreaView style={globalStyle.socialMediaPage}>
      <View style={globalStyle.header}>
        <Title title={`Let's Explore`} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={userStories}
          renderItem={({item}) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
