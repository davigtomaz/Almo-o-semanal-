import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function header(props){
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.titulo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        padding: 20,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 1
    },
    headerText: {
        color: 'white',
        fontSize: 20,
    },
});