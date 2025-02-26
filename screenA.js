import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';
 
const ScreenA = ({ navigation }) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela A</Text>
      <Text style={styles.counter}>Contador: {count}</Text>
 
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => dispatch(increment())} />
        <Button title="-" onPress={() => dispatch(decrement())} />
        <Button title="Resetar" onPress={() => dispatch(reset())} />
      </View>
 
      <Button title="Ir para Tela B" onPress={() => navigation.navigate('ScreenB')} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
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
 
export default ScreenA;
 