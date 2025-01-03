/* eslint-disable quotes */
import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStlye';

const App = () => {
  const userStories = [
    {
      firstname: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstname: 'Angel',
      id: 2,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstname: 'White',
      id: 3,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstname: 'Olivier',
      id: 4,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstname: 'Nata',
      id: 5,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstname: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstname: 'Nino',
      id: 7,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstname: 'Nana',
      id: 8,
      profileImage: require('./assets/images/pexels-photo-28408585.webp'),
    },
    {
      firstname: 'Adam',
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
    </SafeAreaView>
  );
};

export default App;
