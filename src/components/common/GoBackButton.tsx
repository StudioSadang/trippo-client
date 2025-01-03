import {colors} from '@/constants';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GoBackButton = ({...props}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Pressable
      style={[styles.container]}
      onPress={() => navigation.goBack()}
      {...props}>
      <Ionicons name="chevron-back-outline" size={17} color={colors.BLACK} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginTop: 8,
    backgroundColor: colors.GRAY_500,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GoBackButton;
