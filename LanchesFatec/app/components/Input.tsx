
import { View, Text , TextInput , StyleSheet , TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholderTextColor="#999"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 8,
  },
  label: {
    fontSize: 15,
    color: '#222',
    marginBottom: 4,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
