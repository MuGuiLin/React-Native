import * as React from 'react';
import { ScrollView, View, Text, Button, TextInput, StyleSheet } from 'react-native';


const Rund = () => {
  return (
    <ScrollView>
      <View style={css.page}>
        <TextInput></TextInput>
        <Text>高德地图!</Text>
        <Button title="确认"></Button>
      </View>
    </ScrollView>
  );
};

const css = StyleSheet.create({
  page: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Rund;