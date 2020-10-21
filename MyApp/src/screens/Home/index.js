import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View, Text, Button, TextInput, StyleSheet } from 'react-native';

const InfoScreen = ({ navigation, route }) => {
  const { par } = route.params;
  return (
    <ScrollView>
      <View style={css.page}>
        <Text>我是详情页：{par}!</Text>
        <Button title="返回首页" onPress={() => { navigation.goBack() }}></Button>
      </View>
    </ScrollView>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={css.page}>
        <TextInput></TextInput>
        <Text>Home 666!</Text>
        <Button title="进入详情页面" onPress={() => { navigation.navigate('Info', { par: '我是首传来的参数' }) }}></Button>
      </View>
    </ScrollView>
  );
};

const HomeStack = createStackNavigator();
const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Info" component={InfoScreen} />
    </HomeStack.Navigator>
  );
};

const css = StyleSheet.create({
  page: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Home;