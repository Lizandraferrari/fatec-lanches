// Seletor.tsx
import { View, Text , StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

interface SeletorProps {
  label: string;
  options: string[]; 
  onChange?: (value: string) => void;
}

export default function Seletor({ label, options, onChange }: SeletorProps) {
  const [selected, setSelected] = useState(options[0] || '');

  const handleChange = (value: string) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        selectedValue={selected}
        onValueChange={handleChange}
        style={styles.picker}
      >
        {options.map((option) => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    marginVertical: 1 ,
    alignItems: 'center', 
    flexDirection: 'row',

  },
  label: { fontSize: 16, marginBottom: 4 },
  picker: { 
    height: 30,
    width: 150,
    backgroundColor:'#fff',
    borderColor: '#b2b2b2',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 8,
    marginVertical: 5,
  },
})
