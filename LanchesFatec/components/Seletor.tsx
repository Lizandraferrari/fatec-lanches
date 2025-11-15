import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import TextFont from '@/components/TextFont';

interface SeletorProps {
  label: string;
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  style?: any; 
}

export default function Seletor({ label, options, defaultValue, onChange, style }: SeletorProps) {
  const [selected, setSelected] = useState(defaultValue || options[0] || '');

  const handleChange = (value: string) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  const items = options.map((option) => ({ label: option, value: option }));

  return (
    <View style={[styles.container , style]}>
      <TextFont style={styles.label}>{label}</TextFont>

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
  },
  label: {
    fontSize: 20,
    marginRight: 8,
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
    fontFamily: 'Roboto_300Light',
    justifyContent: 'center',
  },
});
