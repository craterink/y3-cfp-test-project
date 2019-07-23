 import { AsyncStorage } from 'react-native';
 
 
 export let _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value != null) {
        return value;
      } else {
        return null;
      }
    } catch (error) {
      alert(error);
    }
  }

export let _storeData = async (key,value) => {
    try {
      AsyncStorage.setItem(key, value);
    } catch (error) {
      alert(error);
    }
  }