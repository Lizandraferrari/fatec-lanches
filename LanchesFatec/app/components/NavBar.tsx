import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

export default function NavBar() {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.icon}>
        <Image source={require('../../assets/fork-knife.png')} style={styles.image} />
        <Text style={styles.text}>Lanches</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <Image source={require('../../assets/cup-straw.png')} style={styles.image} />
        <Text style={styles.text}>Bebidas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <Image source={require('../../assets/cake.png')} style={styles.image} />
        <Text style={styles.text}>Bomboniere</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <Image source={require('../../assets/person.png')} style={styles.image} />
        <Text style={styles.text}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#b00000',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center',           
    position: 'absolute',
    bottom: 0,
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
    fontWeight: 'medium',
  },
});
