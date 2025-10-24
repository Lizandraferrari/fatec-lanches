import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import BlueBtn from './Btn';

// Tipagem para o estado de quantidade
interface ItemCardProps {
  initialQuantity?: number;
  nome: string;
  preco: number;
}

export default function ItemCard({ nome, preco }: ItemCardProps) {
  const [quantity, setQuantity] = useState<number>(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.card}>
      <Image
        source={require('../../assets/empada.jpeg')}
        style={styles.image}
      />

      <Text style={styles.title}>{nome}</Text>

      <View style={styles.line}>
        <Text style={styles.price}>R$ {preco.toFixed(2).replace('.', ',')}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantity}>{quantity}</Text>

          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <BlueBtn>Adicionar</BlueBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 15,
    width: 200,
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  line: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'light',
    textDecorationLine: 'underline',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  quantityButton: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#DDD',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 0,
  },
});

