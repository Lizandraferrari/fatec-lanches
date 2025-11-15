import React, { useEffect, useMemo, useState } from "react";
import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BasePage from "@/components/BasePage";
import ItemCart from "@/components/ItemCart";
import Seletor from "@/components/Seletor";
import BlueBtn from "@/components/Btn";
import { Produto } from "@/components/types/produto";
import TextFont from '@/components/TextFont';

const CART_KEY = '@fatec-lanches:cart';

export default function Cart() {
  const [cartItems, setCartItems] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadCart() {
    try {
      setLoading(true);
      const raw = await AsyncStorage.getItem(CART_KEY);
      const parsed: Produto[] = raw ? JSON.parse(raw) : [];
      setCartItems(parsed);
    } catch (error) {
      console.log('Erro ao carregar carrinho:', error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  }

  async function removeItem(_id: string) {
    try {
      const raw = await AsyncStorage.getItem(CART_KEY);
      const parsed: Produto[] = raw ? JSON.parse(raw) : [];

      const filtered = parsed.filter((it) => it._id !== _id);

      await AsyncStorage.setItem(CART_KEY, JSON.stringify(filtered));
      setCartItems(filtered);
    } catch (error) {
      console.log('Erro ao remover item do carrinho:', error);
    }
  }

  async function updateItemQuantity(_id: string, newQuantity: number) {
    try {
      const raw = await AsyncStorage.getItem(CART_KEY);
      const parsed: Produto[] = raw ? JSON.parse(raw) : [];

      const updatedItems = parsed.map((item) => {
        if (item._id === _id) {
          return { ...item, quantity: newQuantity }; 
        }
        return item;
      });

      await AsyncStorage.setItem(CART_KEY, JSON.stringify(updatedItems));
      setCartItems(updatedItems);
    } catch (error) {
      console.log('Erro ao atualizar quantidade do item:', error);
    }
  }

  useEffect(() => {
    loadCart();
  }, []);

  const total = useMemo(() => {
    return cartItems.reduce((sum, it) => {
      const qtd = Number(it.quantity ?? 1);
      const preco = Number(it.preco ?? 0);
      return sum + preco * qtd;
    }, 0);
  }, [cartItems]);

  return (
    <BasePage title="Carrinho" subtitle="Verifique seu Pedido">
      <View style={{ flex: 1 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#B20000" />
        ) : cartItems.length === 0 ? (
          <TextFont style={styles.empty}>Seu carrinho está vazio, adicione algum item!</TextFont>
        ) : (
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              
              <ItemCart
                nome={item.nome}
                preco={Number(item.preco)}
                quantity={Number(item.quantity)}
                imagemUrl={item.imagemUrl}
                onRemove={() => removeItem(item._id)}
                onUpdateQuantity={(newQuantity) => updateItemQuantity(item._id, newQuantity)} // Passando a função
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
        <View style={styles.info}>
      <TextFont style={styles.sumPrice}>Total: R$ {total.toFixed(2).replace('.', ',')}</TextFont>

      <Seletor style={{marginHorizontal: 28}} label="Método de Pagamento:" options={['Pix', 'Cartão de Crédito']} />

      <BlueBtn onPress={() => { console.log(cartItems) }}>
        Finalizar Pedido
      </BlueBtn>
      </View>
    </BasePage>
  );
}

const styles = StyleSheet.create({
  sumPrice: {
    fontSize: 24,
    fontFamily: 'Roboto_700Bold',
    color: '#B20000',
    textDecorationLine: 'underline',
  },
  empty: {
    flex: 1,
    textAlign: 'center',
    margin: 30,
    fontSize: 24,
    color: '#666666',
  },
  info: {
    alignItems: 'center',
    gap: 8,
    marginVertical: 12,
  }
});
