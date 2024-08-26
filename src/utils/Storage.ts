import AsyncStorage from '@react-native-async-storage/async-storage';

export const setList = async (key:string, value:string) => {
  try {
    await AsyncStorage.clear();
    await AsyncStorage.setItem(key, value);
    return 'Ok';
  } catch (error) {
    return error;
  }
};

export const getList = async () => {
  try {
    const value = await AsyncStorage.getItem('data');
    return JSON.parse(value as string);
  } catch(error) {
    return error;
  }
};
