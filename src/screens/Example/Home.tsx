import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Home = () => {
  const [Txt, setTxt] = useState('One');
  return (
    <View style={{ flex: 1, backgroundColor: 'grey', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
        {Txt}
      </Text>
      <TouchableOpacity onPress={() => setTxt('One')} style={styles.btn}>
        <Text style={{ color: 'white', fontSize: 20 }}>One</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTxt('Two')} style={styles.btn}>
        <Text style={{ color: 'white', fontSize: 20 }}>Two</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTxt('Three')} style={styles.btn}>
        <Text style={{ color: 'white', fontSize: 20 }}>Three</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTxt('Four')} style={styles.btn}>
        <Text style={{ color: 'white', fontSize: 20 }}>Four</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTxt('Five')} style={styles.btn}>
        <Text style={{ color: 'white', fontSize: 20 }}>Five</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTxt('Six')} style={styles.btn}>
        <Text style={{ color: 'white', fontSize: 20 }}>Six</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTxt('Seven')} style={styles.btn}>
        <Text style={{ color: 'white', fontSize: 20 }}>Seven</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTxt('Eignt')} style={styles.btn}>
        <Text style={{ color: 'white', fontSize: 20 }}>Eignt</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderColor: 'red',
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginVertical: 20,
  },
});
