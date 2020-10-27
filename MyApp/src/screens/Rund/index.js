import React from 'react';
import { Text, TouchableOpacity, Dimensions, ScrollView, View, StyleSheet, Switch, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');
const cellWidth = width * 0.3;

const Cell = () => {
    const [selected, setSelected] = React.useState(false);
    return (
        <TouchableOpacity
            onPress={() => setSelected(!selected)}
            style={[css.cell, selected && { backgroundColor: 'blue' }]}
        />
    );
};

function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
        </View>
    );
}

const MainScreen = ({ navigation }) => {
    const [isSingle, setIsSingle] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    return (
        <ScrollView style={css.container}>

            <View style={css.item}>
                <Text style={css.title}> 明确状态归属，合理切分组件！</Text>
            </View>

            <View style={css.item}>
                <Text>单项选择</Text>
                <Switch style={{ marginLeft: 10 }} value={isSingle} onValueChange={setIsSingle} />
            </View>

            <View style={css.item}>
                {isSingle ? [...new Array(9)].map((_, i) => {
                    return (
                        <TouchableOpacity
                            key={i} onPress={() => setSelectedIndex(i)}
                            style={[css.cell, selectedIndex === i && { backgroundColor: '#f70172' }]}
                        />
                    );
                })
                    : [...new Array(9)].map((_, i) => { return <Cell key={i} />})
                }
            </View>

            <View style={css.item}>
                <Button title="OK 打开详情看一看" onPress={() => navigation.navigate('Details')} />
            </View>
  
        </ScrollView>
    );
};

const NineGrid = () => {
    const SettingsStack = createStackNavigator();
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="九宫格" component={MainScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

export default NineGrid;

const css = StyleSheet.create({
    container: {
        paddingBottom: 200
    },

    item: {
        marginTop: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    cell: {
        width: cellWidth,
        height: cellWidth,
        borderWidth: 1,
        borderColor: 'black',
    },
    title: {
        padding: 10, fontSize: 18, color: 'red'
    }
});