import { useRouter } from 'expo-router';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NavBar() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.icon} onPress={() => router.push('/salgados')}>
          <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="white" />
          <Text style={styles.text}>Lanches</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => router.push('/')}>
          <SimpleLineIcons name="cup" size={24} color="white" />
          <Text style={styles.text}>Bebidas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <MaterialCommunityIcons name="cake-variant-outline" size={24} color="white" />
          <Text style={styles.text}>Bomboniere</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => router.push('/profile')}>
          <Ionicons name="person-outline" size={24} color="white" />
          <Text style={styles.text}>Perfil</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => router.push('/cart')}
      >
        <MaterialCommunityIcons name="cart-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  navbar: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#b00000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginBottom: 3,
    tintColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  cartButton: {
    position: 'absolute',
    right: 15,
    top: -80,
    backgroundColor: '#b00000',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
})
