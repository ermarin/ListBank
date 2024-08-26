import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function ListBank({ data }:any) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Cargando lista...</Text>
      ) : (
        <FlatList
          style={styles.verticallySpaced}
          data={data}
          renderItem={({item}) => (
            <View style={[styles.lis, styles.mb20]}>
              <Image
                source={{uri: item.url}}
                style={
                  item.bankName === 'Banregio' ?
                  styles.logoWidth
                  : styles.tinyLogo
                }
              />
              <View style={styles.viewDisplay}>
                <Text>Nombre: {item.bankName}</Text>
                <Text>Descripción: {item.description}</Text>
                <Text>Antigüedad: {item.age}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => (item.bankName)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  viewDisplay: {
    display: 'flex',
    flexDirection: 'column',
  },
  lis: {
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  logoWidth: {
    width: 100,
    height: 50,
    marginBottom: 10,
  },
  tinyLogo: {
    minWidth: 100,
    height: 80,
    marginBottom: 10,
  },
  mt20: {
    marginTop: 20,
  },
  mb20: {
    marginBottom: 20,
  },
});
