import React, { Dispatch, SetStateAction, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ButtonData({navigation}:any) {
  const [, setData] = useState<[null, Dispatch<SetStateAction<null>>]>();
  const getDataService = async () => {
    const datas = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
    const data = await datas.json();
    if (data) {
      setData(data);
      navigation.navigate('List', data);
    }
  };

  return(
    <View style={styles.btn}>
      <Pressable onPress={() => getDataService()}>
        <Text style={styles.txtDisplay}>
          Mostrar data servicio
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
    marginBottom: 20,
  },
  txtDisplay: {
    color: '#ffffff',
    fontSize: 20,
  },
});
