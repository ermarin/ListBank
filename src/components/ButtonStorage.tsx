import React, { Dispatch, SetStateAction, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { getList } from '../utils/Storage';

export default function ButtonStorage({ navigation }:any) {
  const [, setData] = useState<[null, Dispatch<SetStateAction<null>>]>();
  const getStorage = async () => {
    const datas = await getList();
    if (datas) {
      setData(datas);
      navigation.navigate('List', datas);
    } else {
      Alert.alert('Sin data', 'No hay data almacenada');
    }
  };

  return(
    <View style={styles.btn}>
      <Pressable onPress={() => getStorage()}>
        <Text style={styles.txtDisplay}>
          Mostrar data Storage
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    marginTop: 20,
  },
  txtDisplay: {
    color: '#ffffff',
    fontSize: 20,
  },
});
