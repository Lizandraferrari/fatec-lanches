import { StyleSheet, TouchableOpacity, View } from "react-native";
import BasePage from "@/components/BasePage";
import Btn from "@/components/Btn";
import Input from "@/components/Input";
import Octicons from '@expo/vector-icons/Octicons';
import { useRouter } from "expo-router";
import TextFont from '@/components/TextFont';

export default function Profile() {
    const router = useRouter();
    const total = 20

    return (
        <BasePage title="Pagamento" subtitle="Insira seus Dados">
            <View style={styles.options}>
                <View style={styles.line}>
                    <TextFont style={styles.price}>Total: R${total.toFixed(2).replace('.', ',')}</TextFont>
                    <TouchableOpacity onPress={ () =>(router.push('/cart'))}>
                        <TextFont style={{fontSize:20}}>Voltar <Octicons name="undo" size={20} color="black" /></TextFont>
                    </TouchableOpacity>
                </View>
                <Input label="Número do Cartão" placeholder="1234 5678 9012 3456" keyboardType="numeric" />
                <Input label="Nome do Titular" placeholder="João da Silva" />
                <Input label="Data de Validade" placeholder="MM/AA" keyboardType="numeric" />
                <Input label="Código Segurança (CVV)" placeholder="123" keyboardType="numeric" secureTextEntry />
                <Input label="CPF do Titular" placeholder="1234 5678 9012 3456" keyboardType="numeric" />
                <Btn variant="red">Finalizar</Btn>
            </View>
        </BasePage>
    );
}


const styles = StyleSheet.create({
    email: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: '300',
        textDecorationLine: 'underline',
    },
    fatec: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: '400',
    },
    options: {
        gap: 8,
        margin: 10,
        alignItems: 'center'
    },
    price: {
        color: '#b00000',
        fontSize: 24,
        fontFamily: 'Roboto_700Bold',
        textDecorationLine: 'underline',
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        marginBottom: 30,
    },

});


