import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './scr/components/Header';

export default function App() {

  const almoco = [
    {dia: 'segunda-feira', principal: 'Feijoada', sobremesa: 'morango'},
    {dia: 'terça-feira', principal: 'strogonoff', sobremesa: 'melancia'},
    {dia: 'quarta-feira', principal: 'Lasanha', sobremesa: 'laranja'},
    {dia: 'quinta-feira', principal: 'fricasse ', sobremesa: 'iorgute'},
    {dia: 'sexta-feira', principal: 'risoto', sobremesa: 'gelatina'},

  ]
  return (
    <View style={styles.container}>
      <Header titulo="Lista" />
      <View style={styles.FlatList}>
        <FlatList data={almoco} renderItem={({ item }) => <Text> {item.dia} | Principal: {item.principal} | Sobremesa: {item.sobremesa}</Text>} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FlatList: {
    borderWidth: 3,
    height: 100,
    padding: 10
  }

});
