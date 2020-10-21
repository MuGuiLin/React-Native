import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View, Text, Button, TextInput, StyleSheet } from 'react-native';


const InfoScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={css.page}>
        <TextInput></TextInput>
        <Text>个人设置!</Text>
        <Button title="返回" onPress={() => { navigation.goBack() }}></Button>
      </View>
    </ScrollView>
  );
};

const MineScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={css.page}>
        <TextInput></TextInput>
        <Text>个人中心 666!</Text>
        <Button title="进入详情页面" onPress={() => { navigation.navigate('Info', { par: '我是首传来的参数' }) }}></Button>
      </View>
    </ScrollView>
  );
};

const Stack = createStackNavigator();
const Mine = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mine" component={MineScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
    </Stack.Navigator>
  );
};

const css = StyleSheet.create({
  page: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Mine;