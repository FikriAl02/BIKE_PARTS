
import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


export default function SparepartCard({ item, onPress }) {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
        >

            <Image
                source={item.image}
                style={styles.image}
            />


            <View style={styles.info}>
                <Text style={styles.name}>
                    {item.name}
                </Text>

                <Text style={styles.category}>
                    {item.category}
                </Text>

                <Text style={styles.detail}>
                    Lihat Detail
                </Text>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    card: {
        width: '31.5%',
        backgroundColor: '#FFFFFF',
        marginBottom: 12,
        borderRadius: 7,
        overflow: 'hidden',
        elevation: 3,
    },

    image: {
        width: '100%',
        height: 105,
        resizeMode: 'cover',
    },

    info: {
        padding: 8,
        minHeight: 90,
    },

    name: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#222222',
    },

    category: {
        fontSize: 10,
        color: '#777777',
        marginTop: 4,
    },

    detail: {
        fontSize: 10,
        color: '#2B2D42',
        marginTop: 8,
        fontWeight: 'bold',
    },
});
