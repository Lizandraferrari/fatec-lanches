import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Input from "../components/Input";
import BlueBtn from "../components/BlueBtn";

export default function LoginScreen() {

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
          <Input
            label="Email:"
            placeholder="fulano@email.com"
          ></Input>
          <Input
            label="Senha:"
            placeholder="Senha"
          ></Input>

          <BlueBtn>Entrar</BlueBtn>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.link}>Faça seu cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    width: '100%',
    alignSelf: 'stretch',
  },
  header: {
    backgroundColor: "#b00000",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    justifyContent: "center",
    paddingVertical: 25,
    marginHorizontal: 0,
    height: 80,
    width: '100%',
    alignSelf: 'stretch',
    position: 'relative',
    left: 0,
    right: 0,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#fff",
    fontSize: 12,
    marginTop: 2,
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 30,
    color: "#005C6D",
  },
  label: {
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 10,
  },

  link: {
    color: "#0000EE",
    textDecorationLine: "underline",
  },
})
