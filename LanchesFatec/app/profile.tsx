import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BasePage from "../components/BasePage";
import Btn from "../components/Btn";

export default function Profile() {
    const user = {
        nome: 'João Silva',
        email: 'joao.silva@example.com',
        fatec: 'Fatec Mauá'
    }

    return (
        <BasePage title="Perfil" subtitle="Gerencie suas informações">
            <View style={styles.card}>
                <Image
                    source={require('../assets/empada.jpeg')}
                    style={styles.image}
                />

                <Text style={styles.title}>{user.nome}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <Text style={styles.fatec}>{user.fatec}</Text>
            </View>
            <View style={styles.options}>
                <Btn variant="cyan">Editar Perfil</Btn>
                <Btn variant="red">Sair</Btn>
                <TouchableOpacity>
                    <Text style={styles.link}>Excluir Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.link}>Relatar um Problema</Text>
                </TouchableOpacity>
            </View>
        </BasePage>
    );
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 15,
        height: 420,
        width: 300,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 8,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
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
    link: {
        color: '#0000EE',
        textDecorationLine: 'underline',
        fontSize: 14,
    },
});


