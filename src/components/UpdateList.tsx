import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { supabase } from '../lib/supabase';
import { setList } from '../utils/Storage';

export default function UpdateList() {
  const setData = async () => {
    const data = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
    const resp = await data.json();
    if (resp) {
      const response = await setList('data', JSON.stringify(resp));
      if (response) {
        Alert.alert('Éxito', 'Se guardo correctamente la información');
      }
    }
  };

  async function setDatas() {
    try {
      const { data, error, status } = await supabase
        .from('banks')
        .select();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setList('data', JSON.stringify(data));
      }
      Alert.alert('Éxito', 'Se guardo correctamente la información');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.contBtn}>
        <Pressable
          onPress={() => setData()}
        >
          <Text style={styles.btns}>
            Guardar data servicio
          </Text>
        </Pressable>
      </View>
      <View style={styles.contBtn}>
        <Pressable
          onPress={() => setDatas()}
        >
          <Text style={styles.btns}>
            Guardar data base
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#cccccc',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    flexDirection:'row',
    padding: 10,
  },
  contBtn: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#0071C5',
  },
  btns: {
    color: '#ffffff',
    padding: 10,
    borderRadius: 10,
  },
});
