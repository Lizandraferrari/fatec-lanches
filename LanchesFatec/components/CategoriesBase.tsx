import { FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useEffect, useState } from 'react';
import api from '@/utils/api';
import ItemCard from './ItemCard';
import BasePage from './BasePage';
import { Produto } from './types/produto';


interface CategoriesBaseProps {
  title: string;
  subtitle: string;
  categoria: string;
}

export default function CategoriesBase({ title, subtitle, categoria }: CategoriesBaseProps) {
  const [item, setItem] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchItems() {
    try {
      setLoading(true);
      const response = await api.get(`/api/produtos?categoria=${categoria}`);
      setItem(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchItems();
  }, [categoria]);

  return (
    <BasePage title={title} subtitle={subtitle}>
      {loading ? (
        <ActivityIndicator size="large" color="#B20000" />
      ) : item.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum item encontrado</Text>
      ) : (
        <FlatList
          data={item}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <ItemCard
              key={item._id}
              _id={item._id}
              imagemUrl={item.imagemUrl}
              nome={item.nome}
              preco={item.preco} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </BasePage>
  );
}

const styles = StyleSheet.create({
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666666',
    marginTop: 20,
  },
});
