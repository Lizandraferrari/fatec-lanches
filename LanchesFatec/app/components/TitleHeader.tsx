import { View , StyleSheet , Text} from 'react-native'

interface TitleHeaderTypes {
    title: string,
    subtitle?: string,
}

export default function TitleHeader( { title , subtitle }: TitleHeaderTypes ){
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#b00000',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 25,
        marginHorizontal: 0,
        height: 80,
        width: '100%',
        alignSelf: 'stretch',
        position: 'relative',
        left: 0,
        right: 0,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    },
    headerSubtitle: {
        color: '#fff',
        fontSize: 12,
        marginTop: 2,
    },
})