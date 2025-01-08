/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
import React, {useEffect, useState} from 'react';
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
import UserPost from './components/UserPost/UserPost';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nino',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nana',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  const userPost = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 100,
      comments: 8,
      bookmarks: 3,
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vancheishvili',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      location: 'New York, NY',
      likes: 200,
      comments: 16,
      bookmarks: 6,
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      id: 5,
    },
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 6,
    },
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: '',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 7,
    },
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 8,
    },
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 9,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<any[]>(
    [],
  );

  const userPostPageSize = 2;
  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [isLoadingUserPost, setIsLoadingUserPost] = useState(false);
  const [userPostRenderedData, setUserPostRenderedData] = useState<any[]>([]);

  const pagination = (
    database: {}[],
    currentPage: number,
    pageSize: number,
  ) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialStoryData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialStoryData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPost(true);
    const getInitialPostData = pagination(userPost, 1, userPostPageSize);
    setUserPostRenderedData(getInitialPostData);
    setIsLoadingUserPost(false);
  }, []);

  return (
    <SafeAreaView style={globalStyle.socialMediaPage}>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Title title={`Let's Explore`} />
                <TouchableOpacity style={globalStyle.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={20}
                    color={'#898DAE'}
                  />
                  <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList
                  horizontal={true}
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                      key={item.id}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPost) {
              return;
            }
            setIsLoadingUserPost(true);
            const contentToAppend = pagination(
              userPost,
              userPostCurrentPage + 1,
              userPostPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostCurrentPage(userPostCurrentPage + 1);
              setUserPostRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPost(false);
          }}
          showsVerticalScrollIndicator={false}
          data={userPostRenderedData}
          renderItem={({item}) => (
            <View style={globalStyle.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                image={item.image}
                profileImage={item.profileImage}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                key={item.id}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
