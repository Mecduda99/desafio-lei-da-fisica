import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import imageHome from '../assets/home.png'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>MCU</Text>
        <Image source={imageHome} style={styles.image}/>
        <Text style={styles.text}>Movimento Circular Uniforme</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre')}>
        <Text style={styles.textButton}>INICIAR</Text>
      </TouchableOpacity>
{/*         
        <Button
        title="Ir para Sobre"
        onPress={() => navigation.navigate('Sobre')}
      /> */}
        <StatusBar style="auto" />
      </View>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    title: {
      fontSize: 46,
      marginBottom:20,
      fontWeight: "900",
      color: '#1C78E4',
    },
    image: {
      width: "100%", height: "30%",
      // borderRadius: 100 / 2,
      // borderWidth: 1,
      marginVertical: 30,
      marginLeft: 10,
      marginRight: 10,
    },
    text: {
      fontSize: 24,
      lineHeight: 32,
      textAlign: "center",
      marginBottom: 10,
      marginHorizontal: 50,
    },
    button: {
      backgroundColor: '#1C78E4', // Cor de fundo branca
      borderRadius: 8, // Borda arredondada
      paddingHorizontal: 120, // Preenchimento horizontal
      paddingVertical: 10, // Preenchimento vertical
      marginVertical: 10, // Margem vertical
      alignItems: 'center', // Centralizar conteúdo horizontalmente
    },
    textButton: {
      color: '#FFF', // Cor do texto azul
      fontSize: 24, // Tamanho do texto
      fontWeight: 'bold', // Negrito
    },
  });
  