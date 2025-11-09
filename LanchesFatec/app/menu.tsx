import { useRouter } from 'expo-router';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import BasePage from "../components/BasePage";

export default function Menu() {
    const router = useRouter()

    return (
        <BasePage title="Menu de Opções" subtitle="Escolha uma categoria">
            <View style={styles.menu}>
                <TouchableOpacity style={styles.icon} onPress={() => router.push('/salgados')}>
                    <MaterialCommunityIcons name="silverware-fork-knife" size={88} color="black" />
                    <Text style={styles.text}>Lanches</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon} onPress={() => router.push('/bebidas')}>
                    <SimpleLineIcons name="cup" size={88} color="black" />
                    <Text style={styles.text}>Bebidas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon} onPress={() => router.push('/bomboniere')}>
                    <MaterialCommunityIcons name="cake-variant-outline" size={88} color="black" />
                    <Text style={styles.text}>Bomboniere</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon} onPress={() => router.push('/profile')}>
                    <Ionicons name="person-outline" size={88} color="black" />
                    <Text style={styles.text}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </BasePage>
    )
}
const styles = StyleSheet.create({
    menu: {
        gap: 48,
        marginTop: 64,
        marginHorizontal: 36,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    icon: {
        alignItems: 'center',
    },
    text: {
        color: '#000',
        fontSize: 28,
        fontWeight: '600',
    }
});