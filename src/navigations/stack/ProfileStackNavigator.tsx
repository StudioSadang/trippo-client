import {profileNavigations} from '@/constants';
import EditProfileScreen from '@/screens/profile/EditProfileScreen';
import ProfileHomeScreen from '@/screens/profile/ProfileHomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';

export type ProfileStackParamList = {
  [profileNavigations.HOME]: undefined;
  [profileNavigations.EDIT_PROFILE]: undefined;
  [profileNavigations.NOTICE]: undefined;
  [profileNavigations.SERVICE_CENTER]: undefined;
  [profileNavigations.TERMS_OF_USE]: undefined;
  [profileNavigations.VERSION_INFO]: undefined;
  [profileNavigations.LOGOUT]: undefined;
  [profileNavigations.WITHDRAWAL]: undefined;
};

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
      }}>
      <Stack.Screen
        name={profileNavigations.HOME}
        component={ProfileHomeScreen}
      />
      <Stack.Screen
        name={profileNavigations.EDIT_PROFILE}
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ProfileStackNavigator;
