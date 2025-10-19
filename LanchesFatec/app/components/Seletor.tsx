import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

interface SeletorProps {
  label: string;
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function Seletor({ label, options, defaultValue, onChange }: SeletorProps) {
  const [selected, setSelected] = useState(defaultValue || options[0] || '');

  const handleChange = (value: string) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  const items = options.map((option) => ({ label: option, value: option }));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.pickerWrapper}>
        <RNPickerSelect
          onValueChange={handleChange}
          items={items}
          value={selected}
          useNativeAndroidPickerStyle={false}
          Icon={() => <Ionicons name="chevron-down" size={20} color="gray" />}
          style={{
            inputIOS: styles.picker,
            inputAndroid: styles.picker,
            iconContainer: { top: 10, right: 12 },
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 50,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  pickerWrapper: {
    flex: 1,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#b2b2b2',
    backgroundColor: '#fff',
  },
  picker: {
    height: 40,
    paddingHorizontal: 12,
    color: '#000',
    fontSize: 16,
    fontWeight: 'thin',
    justifyContent: 'center',
  },
});
