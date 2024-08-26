import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getList } from '../utils/Storage';
import ButtonData from '../components/ButtonData';
import ButtonStorage from '../components/ButtonStorage';
import ButtonBase from '../components/ButtonBase';

export default function HomeScreen({ navigation }:any) {
  const [ifData, setIfData] = useState<boolean>(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    reviewData();
  }, []);

  const reviewData = async () => {
    const dataExist = await getList();
    if (dataExist) {
      setIfData(true);
    } else {
      setIfData(false);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar barStyle={'light-content'} />
      <ButtonData navigation={navigation} />
      <ButtonBase navigation={navigation} />
      <Text style={styles.line}>======== O ========</Text>
      {ifData && (
        <ButtonStorage navigation={navigation} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0092FF',
  },
  line: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
