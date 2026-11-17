
import React from 'react';

import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';

export default function SearchBar({ value, onChangeText }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Cari sparepart sepeda..."
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 13,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        fontSize: 14,
    },
});
