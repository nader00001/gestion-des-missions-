import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Radio } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RadioInput = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <View>
      {options.map((option) => (
        <View key={option.id}>
          <Radio
            onPress={() => handleSelectOption(option)}
            selected={selectedOption && selectedOption.id === option.id}
          />
          <Text>{option.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default RadioInput;
