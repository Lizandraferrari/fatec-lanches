import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Tipagem para o estado de quantidade
interface ItemCardProps {
  initialQuantity?: number;
}

const ItemCard: React.FC<ItemCardProps> = () => {
  const [quantity, setQuantity] = useState<number>(1); // Quantidade inicial é 1
  const price = 10; // Definindo preço fixo para o item

  const increaseQuantity = () => setQuantity(quantity + 1); // Aumentar quantidade
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1); // Diminuir quantidade
  };

  return (
    <View style={styles.card}>
      {/* Imagem do produto */}
      <Image
        source={require('../../Imagem/prato.jpeg')} // Imagem do item
        style={styles.image}
      />
      
      <View style={styles.textContainer}>
        {/* Nome do item */}
        <Text style={styles.title}>Bolo de Pote de Chocolate</Text>

        {/* Preço do item */}
        <Text style={styles.price}>R$ {price},00</Text>

        {/* Controles de quantidade */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantity}>{quantity}</Text>

          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Total com base na quantidade */}
        <Text style={styles.total}>Total: R$ {price * quantity},00</Text>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row', // Card com layout horizontal (imagem e informações lado a lado)
    borderRadius: 10,
    padding: 10,
    width: '20%', // Largura mais compacta
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 80, // Tamanho da imagem
    height: 80,
    borderRadius: 8,
    marginRight: 10, // Espaço entre a imagem e o texto
  },
  textContainer: {
    flex: 1, // O container de texto vai ocupar o restante do card
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    color: '#333',
  },
  total: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ItemCard;