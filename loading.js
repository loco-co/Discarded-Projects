import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return <View style={styles.maincontain}>
        <Text style={styles.text}>Getting the weather...</Text>
    </View>
}

const styles = StyleSheet.create({
    maincontain: {
        flex: 1,
        backgroundColor: '#FDF6AA',
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100
    },
    text: {
        color: '#2c2c2c',
        fontSize: 22
    }
});