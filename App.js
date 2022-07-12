import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

const App = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.spring(progress, { toValue: 1, useNativeDriver: true }).start();
    Animated.spring(scale, { toValue: 3, useNativeDriver: true }).start();
  }, [])
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, {
        borderRadius: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [SIZE / 4, SIZE / 2]
        }),
        opacity: progress,
        transform: [
          { scale },
        ]
      }
      ]
      }>

      </Animated.View>
    </View>
  )
}

const SIZE = 100

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0,0,256,0.5)'
  }
})

export default App
