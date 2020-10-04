import React, {useRef, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Dimensions, Text, Image, ActivityIndicator} from 'react-native';
import {getImageApi} from './home.thunk';

const windowWidth = Dimensions.get('window').width;

function LoadingApi(props) {
  const {loading} = props;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {props.children}
      {loading && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#a4a4a480',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="pink" />
        </View>
      )}
    </View>
  );
}

function Home(props) {
  const {fail, loading, imageSrc} = props;
  const {getImageApi} = props;

  const handleGetImage = () => {
    getImageApi();
  };

  if (fail) {
    return (
      <View>
        <Text>404 NOT FOUND</Text>
      </View>
    );
  }

  return (
    <LoadingApi loading={loading}>
      <View
        onTouchStart={handleGetImage}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'pink',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
            elevation: loading ? 0 : 7,
          }}>
          <Text>Click to get random image</Text>
        </View>
        <View
          style={{
            width: windowWidth - 100,
            height: windowWidth - 100,
            margin: 20,
            borderWidth: 1,
            borderColor: '#000',
          }}>
          <Image
            source={{uri: imageSrc}}
            resizeMode={'cover'}
            style={{
              flex: 1,
            }}
          />
        </View>
      </View>
    </LoadingApi>
  );
}

const mapStateToProps = ({appReducer}) => {
  return {
    fail: appReducer.fail,
    loading: appReducer.loading,
    imageSrc: appReducer.imageSrc,
  };
};

const mapDispatchToProps = {
  getImageApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
