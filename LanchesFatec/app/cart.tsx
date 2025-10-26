import { FlatList, StyleSheet, Text, View } from "react-native";
import BasePage from "../components/BasePage";
import ItemCart from "../components/ItemCart";
import Seletor from "../components/Seletor";
import BlueBtn from "../components/Btn";

const itens = [
    { id: '1', nome: 'Lanche de pernil com queijo' , preco: 6.00},
    { id: '2', nome: 'Bebida', preco: 4.50 },
    { id: '3', nome: 'Bomboniere' , preco: 3.75 },
    { id: '4', nome: 'Sobremesa' , preco: 5.00},
  ] 

const total = 2.0

export default function Cart() {
  return (
    <BasePage title="Carrinho" subtitle="Verifique seu Pedido">
        <View style={{flex: 1}}>
            <FlatList
                    data={itens}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =><ItemCart nome={item.nome} preco={item.preco} />}
                    showsVerticalScrollIndicator={false}
             />
        </View>
       <Text style={styles.sumPrice}>Total: R$ {total.toFixed(2).replace('.', ',').toString()}</Text>
        <Seletor label="Método de Pagamento:" options={['Pix' , 'Cartão de Crédito']}/>
        <BlueBtn>Finalizar Pedido</BlueBtn>
    </BasePage>
  )
}

const styles = StyleSheet.create({
    sumPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#B20000',
        margin: 16,
        textDecorationLine: 'underline',

    },
})
