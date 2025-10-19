import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface BlueBtnProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export default function BlueBtn({ children, style, ...props }: BlueBtnProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#005C6D',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: 150,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'light',
  },
});
