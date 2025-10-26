import { View, FlatList, StyleSheet } from 'react-native';
import ItemCard from '../components/ItemCard';
import CategoriesBase from '../components/CategoriesBase';

export default function Salgados() {
  const itens = [
    { id: '1', nome: 'Lanche de pernil com queijo' , preco: 6.00},
    { id: '2', nome: 'Bebida', preco: 4.50 },
    { id: '3', nome: 'Bomboniere' , preco: 3.75 },
    { id: '4', nome: 'Sobremesa' , preco: 5.00},
  ]
  
  return (
    <CategoriesBase title='Lanches' subtitle='Menu de Lanches'>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =><ItemCard nome={item.nome} preco={item.preco} />}
        showsVerticalScrollIndicator={false}
      />
    </CategoriesBase>
  )
}