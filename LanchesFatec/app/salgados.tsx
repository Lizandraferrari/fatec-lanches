import { View, FlatList, StyleSheet } from 'react-native';
import ItemCard from '../components/ItemCard';
import CategoriesBase from '../components/CategoriesBase';
import api from '@/utils/api';
import { useEffect, useState } from 'react';

interface Produto {
  _id: string;
  nome: string;
  preco: number;
  imagemUrl: string;
}

export default function Salgados() {
  const [item , setItem] = useState<Produto[]>([]);

  async function fetchItems() {
    try {
      const response = await api.get('/api/produtos?categoria=Lanche');
      setItem(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <CategoriesBase title='Lanches' subtitle='Menu de Lanches'>
      <FlatList
        data={item}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) =><ItemCard id={item._id} image={item.imagemUrl} nome={item.nome} preco={item.preco} />}
        showsVerticalScrollIndicator={false}
      />
    </CategoriesBase>
  )
}