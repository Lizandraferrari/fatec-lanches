import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_300Light,
  });

  if (!fontsLoaded) return null

  return (
    <SafeAreaProvider>
      <View style={styles.fullscreen}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    margin: 0,
  },
});