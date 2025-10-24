import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Input from '../components/Input';
import BlueBtn from '../components/Btn';
import styles from '../styles/authStyle'

export default function RegisterRoute() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  function handleRegister() {
    if (!email || !name || !password || !confirm) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    if (password !== confirm) {
      Alert.alert('Atenção', 'As senhas Estão diferentes.');
      return;
    }

    Alert.alert('Sucesso', 'Cadastro realizado.', [
      { text: 'OK', onPress: () => router.replace('/login') },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fatec</Text>
        <Text style={styles.headerSubtitle}>Faculdade de Tecnologia</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Lanches Fatec</Text>

        <View>
          <Text style={styles.label}>Faça seu cadastro:</Text>
          <Input label="E-mail" placeholder="fulano.silva@fatec.sp.gov.br" value={email} onChangeText={setEmail} />
          <Input label="Nome" placeholder="Fulano da Silva" value={name} onChangeText={setName} />
          <Input label="Senha" placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
          <Input label="Confirmar Senha" placeholder="Confirmar Senha" secureTextEntry value={confirm} onChangeText={setConfirm} />

          <BlueBtn onPress={() => { handleRegister(); }}>Cadastrar</BlueBtn>
        </View>

        <TouchableOpacity onPress={() => router.replace('/login')}>
          <Text style={styles.link}>Fazer login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
