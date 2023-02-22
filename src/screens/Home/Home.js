import {
  ActivityIndicator,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getRealData} from '../../store/actions/actionCreators';
import {aryCategory} from './mock';
export default function Home() {
  const [data, setData] = useState();
  const [finalArray, setFinalArray] = useState([]);
  const dispatch = useDispatch();
  const loader = useSelector(state => state?.loading);
  const usersData = useSelector(state => state?.usersData?.data);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getRealData());
  }, []);
  useEffect(() => {
    if (usersData?.length !== 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2500);
      setData(usersData?.slice(0, 10));
    } else {
      setLoading(true);
    }
  }, []);

  useEffect(() => {
    let finalArr = [];
    aryCategory.map(item => {
      if (usersData?.length !== 0) {
        const objArr = usersData?.filter(temp => temp.category_name === item);
        if (objArr === undefined) {
          setLoading(true);
        } else {
          setLoading(false);
          if (Object.keys(objArr).length > 0) {
            let newObj = {};
            newObj.title = item;
            newObj.data = objArr;
            finalArr.push(newObj);
          }
        }
      }
    });

    setFinalArray(finalArr);
  }, [usersData]);
  const navigation = useNavigation();
  const renderData = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {details: item})}
        style={styles.dataItemContainer}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {loader ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <SectionList
            sections={finalArray}
            keyExtractor={(item, index) => item + index}
            renderItem={renderData}
            renderSectionHeader={({section: {title}}) => {
              return (
                <View style={styles.sectionHeader}>
                  <Text>{title.toUpperCase()}</Text>
                </View>
              );
            }}
          />
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
  dataItemContainer: {
    height: 'auto',
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: '#AACB73',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 8,
  },
  sectionHeader: {
    backgroundColor: '#B4E4FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
});
