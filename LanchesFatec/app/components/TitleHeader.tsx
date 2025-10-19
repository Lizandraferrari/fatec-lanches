import { View , StyleSheet , Text} from 'react-native'

interface TitleHeaderTypes {
    title: string,
    subtitle?: string,
}

export default function TitleHeader( { title , subtitle }: TitleHeaderTypes ){
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      {subtitle && <Text style={styles.headerSubtitle}>{subtitle}</Text>}
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        marginHorizontal: 0,
        width: '100%',
        alignSelf: 'stretch',
        position: 'relative',
        left: 0,
        right: 0,
    },
    headerTitle: {
        color: '#005C6D',
        fontSize: 36,
        fontWeight: 'bold',
    },
    headerSubtitle: {
        color: '#000',
        fontSize: 16,
        marginTop: 2,
    },
})