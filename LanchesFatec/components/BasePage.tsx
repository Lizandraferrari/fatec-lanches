import { View, StyleSheet, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import TitleHeader from "./TitleHeader";
import NavBar from "./NavBar";
import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

interface BasePageProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function BasePage({ title, subtitle, children }: BasePageProps) {
  const router = useRouter()
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);

  async function checkToken() {
    try {
      const token = await SecureStore.getItemAsync('token');
      if (!token) return false;

      const decoded = jwtDecode(token);
      const expirationTime = decoded.exp * 1000;
      const isExpired = Date.now() > expirationTime;

      if (isExpired) {
        await SecureStore.deleteItemAsync('token');
        return false;
      }
      return true;

    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    async function run() {
      const result = await checkToken();
      setIsValidToken(result);
    }
    run();
  }, []);

  useEffect(() => {
    if (isValidToken === false) {
      router.replace("/login");
    }
  })

  if (isValidToken === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#B20000" />
      </View>
    )
  }

  if (!isValidToken) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.replace('/login')}>
          <Text style={styles.link}>Deslogado! Caso não seja redirecionado automaticamente, clique aqui.</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TitleHeader title={title} subtitle={subtitle} />
      <View style={styles.children}>
        {children}
      </View>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  children: {
    flex: 1,
    alignItems: 'center',
  },
  link: {
    fontSize: 24,
    color: '#0000EE',
    textDecorationLine: 'underline',
  },
});
