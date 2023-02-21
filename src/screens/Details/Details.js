import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function Details({route}) {
  const {details} = route.params;
  const [currentPrice, setCurrentPrice] = useState(details.price);
  console.log(details);
  const renderOnlyGallery = ({item}) => {
    return (
      <TouchableOpacity style={styles.galleryCon}>
        <Image
          source={{uri: item}}
          style={styles.imgProduct}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };
  const renderGallery = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setCurrentPrice(item.price);
        }}
        style={[styles.galleryCon]}>
        <Image
          source={{uri: item.product_image}}
          style={styles.imgProduct}
          resizeMode="contain"
        />
        <Text>{item.price}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={styles.titleCon}>
        <Text>{details.title}</Text>
      </View>
      <View style={styles.titleCon}>
        <Text>{`Base Price: ${currentPrice}`}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.contentCon}
        data={
          details.product_variant.length !== 0
            ? details.product_variant
            : details.image
        }
        numColumns={2}
        renderItem={
          details.product_variant.length !== 0
            ? renderGallery
            : renderOnlyGallery
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleCon: {
    height: 'auto',
    padding: 10,
    backgroundColor: '#E4C988',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 8,
  },
  galleryCon: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E0FF',
    borderRadius: 20,
    margin: 10,
    borderWidth: 1,
  },
  imgProduct: {
    height: 100,
    width: 100,
  },
  contentCon: {
    alignItems: 'center',
    paddingBottom: 10,
  },
});
