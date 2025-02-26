import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';
 
const ScreenB = ({ navigation }) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela B</Text>
      <Text style={styles.counter}>Contador: {count}</Text>
 
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => dispatch(increment())} />
        <Button title="-" onPress={() => dispatch(decrement())} />
        <Button title="Resetar" onPress={() => dispatch(reset())} />
      </View>
 
      <Button title="Voltar para Tela A" onPress={() => navigation.navigate('ScreenA')} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
});
 
export default ScreenB;
 