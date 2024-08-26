import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import ListBank from '../components/ListBank';
import UpdateList from '../components/UpdateList';

export default function ListScreen({route}:any) {
  const data = route.params;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <ListBank data={data} />
      <UpdateList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
