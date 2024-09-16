import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';

import ResultadoCalculo from '../ResultadoCalculo';
import Separator from '../Separator'; // Importe o componente Separator
import movCar from '../assets/movcar.png';

export default function Calculadora({ navigation }) {
  const [valorSf, setValorSf] = useState('');
  const [valorS0, setValorS0] = useState('');
  const [valorR, setValorR] = useState('');
  const [resultado, setResultado] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleCalculate = () => {
    // Converter os valores para números
    const numSf = parseFloat(valorSf);
    const numS0 = parseFloat(valorS0);
    const numR = parseFloat(valorR);

    // Verificar se os valores inseridos são válidos (números)
    if (isNaN(numSf) || isNaN(numS0) || isNaN(numR)) {
      // Se algum valor não for um número válido, exiba uma mensagem de erro
      setResultado('Por favor, insira valores numéricos válidos.');
      return;
    }

    // Calcular o resultado conforme a fórmula (n1 - n2) / n3
    const resultadoCalculo = (numSf - numS0) / numR;

    // Definir o resultado calculado no estado
    setResultado(`Resultado: ${resultadoCalculo}`);

    // Exibir o modal
    setModalVisible(true);
  };

  const onCloseModal = () => {
    // Fechar o modal
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image source={movCar} style={styles.image} />
        <Text style={styles.title}>Teste você mesmo!</Text>

        <Text style={styles.text}>Adicione os valores e veja o deslocamento circular na prática.</Text>

        <View style={styles.containerCalc}>
          <Text style={styles.textCalc}>&Delta; &phi; = </Text>
          <View style={styles.inputContainer}>
            <View style={styles.row}>
              <TextInput
                style={styles.input}
                placeholder="Valor Sf"
                keyboardType='numeric'
                value={valorSf}
                onChangeText={setValorSf}
              />
              <Text style={styles.textCalc}>-</Text>
              <TextInput
                style={styles.input}
                placeholder="Valor S0"
                keyboardType='numeric'
                value={valorS0}
                onChangeText={setValorS0}
              />
            </View>

            <Separator />

            <TextInput
              style={styles.input}
              placeholder="Valor R"
              keyboardType='numeric'
              value={valorR}
              onChangeText={setValorR}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text style={styles.buttonText}>CALCULAR</Text>
        </TouchableOpacity>

        {/* Exibir o resultado */}
        <ResultadoCalculo 
        resultado={resultado}
        visible={modalVisible}
        onClose={onCloseModal}
      />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#1C78E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 292,
    marginVertical: 10,
  },
  title: {
    color: 'white',
    fontSize: 33,
    fontWeight: 'bold',
    padding: 15,
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: "center",
    marginHorizontal: 5,
  },
  containerCalc: {
    marginVertical: 10,
    backgroundColor: '#004EAA',
    padding: 10,
    borderRadius: 10,
  },
  textCalc: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: '#ECECEC',
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    width: '30%',
    marginHorizontal: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 120, // Preenchimento horizontal
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1C78E4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    color: 'white',
    fontSize: 18,
    marginVertical: 20,
  },
});