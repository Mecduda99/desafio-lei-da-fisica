import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import terra from  '../assets/terra.gif';
import formula1 from  '../assets/formula1.png'
import formula2 from  '../assets/formula2.png'


export default function Sobrew({ navigation }) {
  const handleLinkPress = () => {
    // Aqui você pode definir a URL que deseja abrir quando o link for clicado
    const url = 'https://aprovatotal.com.br/movimento-circular/';
    // Abra a URL usando o Linking do React Native
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.subtitle}>Sobre o</Text>
        <Text style={styles.title}>Movimento Circular</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image style={styles.imageTerra} source={terra} />
      <Text style={styles.texto}>O movimento circular (MC) é caracterizado pela trajetória circular ou curvilínea realizada por um corpo. Para compreender melhor esse tipo de movimento, é fundamental considerar algumas grandezas importantes, como o período e a frequência.</Text>
      <Image style={styles.imgFormula} source={formula1} />
      <Text style={styles.texto}>O movimento circular uniforme é caracterizado pelo deslocamento de um corpo ao longo de uma trajetória curvilínea com velocidade constante.</Text>
      <Text style={styles.texto}>Podemos observar diversos exemplos desse tipo de movimento no nosso cotidiano, como as pás do ventilador em funcionamento, rotação da terra, de um liquidificador em alta velocidade ou até mesmo a roda gigante em um parque de diversões quando atinge um estado estável de rotação.</Text>
      <Text style={styles.subtitle}>Deslocamento Angular</Text>
      <Text style={styles.texto}>No movimento circular uniforme, o deslocamento angular desempenha um papel fundamental na descrição da posição de um objeto em rotação. O deslocamento angular refere-se ao ângulo entre duas posições angulares, expresso em radianos. É calculado pela diferença entre as posições angulares inicial e final do objeto. Equivalentemente, utiliza-se:</Text>
      <Image style={styles.imgFormula} source={formula2} />
      <Text>
      Conteúdo disponilizado pelo site:
        <Text style={styles.link} onPress={handleLinkPress}> link</Text>.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calculadora')}>
        <Text style={styles.textButton}>PRATICAR</Text>
      </TouchableOpacity>

      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,

  },
  scrollContainer: {
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
    paddingBottom: 20,
  },
  link: {
    color: 'blue', // Cor do link
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  containerTitle: {
    display: "flex",
    flexDirection: "collumn",
    alignItems: "center",
    TextAlign: "center",
    marginBottom: 10,
    
  },
  title: {
    fontSize: 32,
    margin: 10,
    fontWeight: '900',
    // lineHeight: 20,
    color: "#1c78e4",
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    color: '#1c78e4'
  },
  texto: {
    // width: "50%",
    padding: 10,
    // borderWidth: 1,
    // borderRadius: 8,
    // borderColor: '#dcdde1',
    textAlign: 'center',
    // marginHorizontal: 50,
    marginVertical: 10,
  },
  imgFormula: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#000',
    marginTop: 10,
    resizeMode: 'contain',
  },
  imageTerra: {
    borderRadius: 8,
    resizeMode: 'contain',
    borderColor: '#000',
    borderWidth: 1,

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
    fontSize: 19, // Tamanho do texto
    fontWeight: 'bold', // Negrito
  }
});
