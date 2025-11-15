import { StyleSheet, TouchableOpacity, View } from "react-native";
import BasePage from "@/components/BasePage";
import Octicons from '@expo/vector-icons/Octicons';
import { useRouter } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as Clipboard from 'expo-clipboard';
import { useEffect, useState } from "react";
import TextFont from '@/components/TextFont';

export default function Profile() {
    const router = useRouter()
    const total = 20
    const pix = '00020126360014BR.GOV.BCB.PIX0114+55119999999952040000530398654045.005802BR5925Nome do Recebedor6009Sao Paulo61080540900062070503***6304ABCD';

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(pix);
    };

    const [timeLeft, setTimeLeft] = useState(5 * 60) //5 minutos

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const time = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

    return (
        <BasePage title="Pagamento" subtitle="Insira seus Dados">
            <View style={styles.options}>
                <View style={styles.line}>
                    <TextFont style={styles.price}>Total: R${total.toFixed(2).replace('.', ',')}</TextFont>
                    <TouchableOpacity onPress={() => (router.push('/cart'))}>
                        <TextFont style={{ fontSize: 20 }}>Voltar <Octicons name="undo" size={20} /></TextFont>
                    </TouchableOpacity>
                </View>
                {
                    timeLeft > 0.0 ? (<View style={{ alignItems: 'center' }}>
                        <TextFont style={styles.copy}>Clique no código pix para copiar:</TextFont>
                        <View style={styles.box}>
                            <TouchableOpacity onPress={copyToClipboard}>
                                <MaterialCommunityIcons style={styles.icon} name="clipboard-multiple-outline" size={20} color="black" />
                                <TextFont>
                                    {pix}
                                </TextFont>
                            </TouchableOpacity>
                        </View>
                        <TextFont style={styles.pix}>Tempo restante para pagamento: {time}</TextFont>
                    </View>
                    ) : (
                        <View>
                            <TextFont style={styles.fail}>QR code expirado!</TextFont>
                        </View>
                    )}
            </View>
        </BasePage>
    );
}

const styles = StyleSheet.create({
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
    box: {
        margin: 50,
        padding: 40,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        borderRadius: 10,
        boxShadow: 'inset 0px 0px 10px rgba(0,0,0,0.5)',
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        marginBottom: 30,
    },
    icon: {
        right: 0,
        top: 0,
        position: 'absolute',
        margin: -25,
    },
    copy: {
        fontSize: 20,
        fontFamily: 'Roboto_400Regular',
    },
    pix: {
        color: '#b00000',
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',

    },
    fail: {
        color: '#b00000',
        fontSize: 24,
        fontFamily: 'Roboto_700Bold',
        marginTop: 100,
    }
});
