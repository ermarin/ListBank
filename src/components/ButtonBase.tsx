import React, { Dispatch, SetStateAction, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ButtonBase({ navigation }:any) {
  const [, setData] = useState<[null, Dispatch<SetStateAction<null>>]>();
  async function getList() {
    try {
      const { data, error, status } = await supabase
        .from('banks')
        .select();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setData(data as any);
        navigation.navigate('List', data);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    }
  }

  return(
    <View style={styles.btn}>
      <Pressable onPress={() => getList()}>
        <Text style={styles.btnTxt}>
          Mostrar data Supabase
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
  btnTxt: {
    color: '#ffffff',
    fontSize: 20,
  },
});
