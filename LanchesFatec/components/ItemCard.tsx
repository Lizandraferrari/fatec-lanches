import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Btn from './Btn';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ItemCardProps {
  quantity?: number;
  nome: string;
  preco: number;
  id: string;
  image: string;
}

export default function ItemCard({ nome, preco, id, image }: ItemCardProps) {
  const [quantity, setQuantity] = useState<number>(0);
  const CART = '@fatec-lanches:cart';

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  async function addCart() {
    if (quantity <= 0) {
      Alert.alert('Atenção', 'Selecione ao menos 1 item.');
      return;
    }

    const itemToAdd: ItemCardProps = {
      id,
      image,
      preco,
      nome,
      quantity,
    }

    try {
      const raw = await AsyncStorage.getItem(CART)
      const item = raw ? JSON.parse(raw) as Array<any> : []

      const itemSearch = item.findIndex((i: any) => i.id === id)
      if (itemSearch >= 0) {
        item[itemSearch].quantity = (item[itemSearch].quantity || 0) + quantity
      } else {
        item.push(itemToAdd);
      }

      await AsyncStorage.setItem(CART, JSON.stringify(item));
      setQuantity(0)
      //console.log('/nCarrinho: ', item,'/n')
      Alert.alert('Sucesso', 'Item adicionado ao carrinho.')
    } catch (error) {
      console.log('erro ao add:', error)
      Alert.alert('Erro', 'Não foi possível adicionar ao carrinho.')
    }
  }
  /*
  async function clearCart() {
    const raw = await AsyncStorage.getItem(CART)
    const item = raw ? JSON.parse(raw) as Array<any> : []
    await AsyncStorage.removeItem('CART')
  }
*/
  return (
    <View style={styles.card} key={id}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />

      <Text style={styles.title}>{nome}</Text>

      <View style={styles.line}>
        <Text style={styles.price}>R$ {preco.toFixed(2).replace('.', ',')}</Text>

        <View>
          <Text>Quantidade:</Text>
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
      </View>
      <Btn onPress={addCart}>Adicionar</Btn>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 15,
    width: 260,
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
    gap: 25
  },

  image: {
    width: 200,
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
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
    backgroundColor: '#DDD',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    backgroundColor: '#fff',
    paddingVertical: 1,
    paddingHorizontal: 10,
    margin: 0,
  },
});

