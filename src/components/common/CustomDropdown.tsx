import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '@/constants';

interface CustomDropdownProps {
  options: string[];
  defaultValue?: string;
}

const deviceHeight = Dimensions.get('screen').height;

const CustomDropdown = ({
  options,
  defaultValue = 'English',
}: CustomDropdownProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.dropdownWrapper}>
      <TouchableOpacity
        style={styles.dropdownContainer}
        onPress={() => setIsDropdownOpen(prev => !prev)}>
        <Text style={styles.selectedText}>{selectedValue}</Text>
        <Ionicons
          name={isDropdownOpen ? 'chevron-up-outline' : 'chevron-down-outline'}
          size={20}
          color={colors.BLACK}
        />
      </TouchableOpacity>

      {isDropdownOpen && (
        <View style={styles.optionsContainer}>
          <FlatList
            data={options}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => handleSelect(item)}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownWrapper: {
    width: '100%',
  },
  dropdownContainer: {
    backgroundColor: colors.GRAY_500,
    borderRadius: 14,
    paddingVertical: deviceHeight > 700 ? 20 : 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedText: {
    fontSize: 16,
    lineHeight: 16,
    color: colors.BLACK,
  },
  optionsContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 14,
    marginTop: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.GRAY_300,
    overflow: 'hidden',
  },
  optionContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_500,
  },
  optionText: {
    fontSize: 16,
    color: colors.BLACK,
  },
});

export default CustomDropdown;