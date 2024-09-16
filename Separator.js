import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#fff', // Cor da linha
    marginVertical: 10, // Margem vertical para separação
  },
});

export default Separator;