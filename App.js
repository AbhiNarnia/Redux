// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { useSelector, useDispatch } from "react-redux";

import { counterIncrement,counterDecrement } from "./SRC/actions/count"


function App() {

  const count = useSelector(state => state.counter.count)
  let dispatch = useDispatch();

  
  return (
    <View style={styles.container}>
      <Button title="INCREMENT"
        onPress={() => dispatch(counterIncrement())}>
      </Button>
      <Text>{count}</Text>
      <Button title="DECREMENT"
        onPress={() => dispatch(counterDecrement())}>
      </Button>
      {/* <StatusBar style= "auto"></StatusBar> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignitems: 'center',
    justifyContent: 'center'
  }
});




export default App