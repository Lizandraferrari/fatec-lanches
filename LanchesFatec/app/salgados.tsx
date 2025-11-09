import { View, FlatList, StyleSheet } from 'react-native';
import ItemCard from '../components/ItemCard';
import CategoriesBase from '../components/CategoriesBase';

export default function Salgados() {
  const image = 'https://emporiokaminski.com.br/wp-content/uploads/2024/06/Mini-Empada-Frango-1.jpg'

  const itens = [
    { id: '1', nome: 'Lanche de pernil com queijo' , preco: 6.00 , image: image },
    { id: '2', nome: 'Bebida' , preco: 4.50 , image: image },
    { id: '3', nome: 'Bomboniere' , preco: 3.75 , image: image },
    { id: '4', nome: 'Sobremesa' , preco: 5.00 , image: image },
  ]
  
  return (
    <CategoriesBase title='Lanches' subtitle='Menu de Lanches'>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =><ItemCard id={item.id} image={item.image} nome={item.nome} preco={item.preco} />}
        showsVerticalScrollIndicator={false}
      />
    </CategoriesBase>
  )
}