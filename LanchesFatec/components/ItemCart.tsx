import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ItemCartProps {
  nome: string;
  preco: number;
  quantity: number;
  imagemUrl?: any;
  onRemove?: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
}

export default function ItemCart({ nome, preco, imagemUrl, onRemove, quantity, onUpdateQuantity }: ItemCartProps) {
  const [qty, setQty] = useState(quantity);

  useEffect(() => {
    setQty(quantity);
  }, [quantity]);

  useEffect(() => {
    onUpdateQuantity(qty);
  }, [qty]);

  const increaseQuantity = () => setQty(qty + 1);
  const decreaseQuantity = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: imagemUrl }}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
          <Ionicons name="close" size={18} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>{nome}</Text>

        <View style={styles.quantityContainer}>
          <Text style={styles.quantityLabel}>Quantidade:</Text>

          <View style={styles.quantityRow}>
            <TouchableOpacity onPress={decreaseQuantity} style={[styles.quantityButton, { paddingHorizontal: 10 }]}
            >
              <Text style={styles.quantityButtonText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{qty}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>＋</Text>
            </TouchableOpacity>
          </View>
        </View>


        <Text style={styles.total}>
          Total: R$ {(preco * qty).toFixed(2).replace('.', ',')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 10,
    width: 320,
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
    margin: 15,
  },
  textContainer: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
  },
  removeButton: {
    position: 'absolute',
    right: 0,
    top: -10,
    zIndex: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
    textAlign: 'center',
  },
  quantityLabel: {
    fontSize: 12,
    fontWeight: 'thin',
  },
  quantityContainer: {
    alignItems: 'center',
    marginVertical: 4,
  },

  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4,
  },

  quantityButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityText: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  total: {
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 4,
  },
});
