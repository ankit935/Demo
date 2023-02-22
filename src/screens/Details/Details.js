import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export default function Details({route}) {
  const {details} = route.params;
  const [currentPrice, setCurrentPrice] = useState(details.price);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderOnlyGallery = ({item}) => {
    return (
      <TouchableOpacity style={styles.galleryCon}>
        <Image
          source={{uri: item}}
          style={styles.variantImg}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  const _renderItem = () => {
    return (
      <View style={styles.flatlistCon}>
        <Image
          source={{uri: details.product_variant[activeIndex].product_image}}
          style={[styles.imgProduct]}
          resizeMode="contain"
        />
      </View>
    );
  };
  const renderpagination = () => {
    return (
      <Pagination
        dotsLength={details?.product_variant?.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.dotCon}
        inactiveDotStyle={{
          backgroundColor: 'blue',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  const renderVariant = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setActiveIndex(index), setCurrentPrice(item.price);
        }}
        style={styles.variantContainer}>
        <Image
          source={{uri: item.product_image}}
          style={styles.variantImg}
          resizeMode="contain"
        />
        <Text style={styles.colorTxt}>{`Color :  ${item.color}`}</Text>
        <Text style={styles.sizeTxt}>{`Size : ${item.size}`}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 80}}>
      <View style={styles.titleCon}>
        <Text>{details.title}</Text>
      </View>
      <Carousel
        activeAnimationType="spring"
        pagingEnabled={true}
        data={details?.product_variant}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width}
        renderItem={_renderItem}
        onSnapToItem={index => setActiveIndex(index)}
      />
      {renderpagination()}
      <View style={styles.titleCon}>
        <Text>{`Base Price: ${currentPrice}`}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.detailsProductContent}
        numColumns={2}
        data={
          details?.product_variant?.length !== 0
            ? details.product_variant
            : details.image
        }
        renderItem={
          details?.product_variant?.length !== 0
            ? renderVariant
            : renderOnlyGallery
        }
      />
    </ScrollView>
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
    height: '100%',
    width: '100%',
  },
  detailsProductContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentCon: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  variantContainer: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 20,
    margin: 10,
  },
  variantImg: {
    height: 100,
    width: 100,
  },
  colorTxt: {
    marginVertical: 5,
    alignSelf: 'center',
  },
  sizeTxt: {
    alignSelf: 'center',
  },
  dotCon: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'black',
  },
  flatlistCon: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
    borderWidth: 1,
    marginTop: 10,
    elevation: 5,
  },
});
