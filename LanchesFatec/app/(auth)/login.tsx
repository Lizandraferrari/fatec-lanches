import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Input from '../components/Input';
import BlueBtn from '../components/BlueBtn';
import styles from '../styles/authStyle';

export default function LoginRoute() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fatec</Text>
        <Text style={styles.headerSubtitle}>Faculdade de Tecnologia</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Lanches Fatec</Text>

        <View>
          <Text style={styles.label}>Faça seu login:</Text>
          <Input label="Email:" placeholder="fulano@email.com" />
          <Input label="Senha:" placeholder="Senha" secureTextEntry />

          <BlueBtn onPress={() => { /* implementar login */ }}>Entrar</BlueBtn>
        </View>

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={styles.link}>Faça seu cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
