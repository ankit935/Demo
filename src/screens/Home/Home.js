import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../store/actions/actionCreators';
export default function Home() {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const usersData = useSelector(state => state.usersData);
  console.log('?>>>>>', usersData);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    if (usersData.length !== 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2500);
      setData(usersData);
    } else {
      setLoading(true);
    }
  }, []);
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <Text onPress={() => navigation.navigate('Details')}>Home</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
