
import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';

export default function DetailScreen({ route }) {

    const { item } = route.params;

    return (
        <ScrollView style={styles.container}>

            <Image
                source={item.image}
                style={styles.image}
            />

            <View style={styles.content}>

                <Text style={styles.category}>
                    {item.category}
                </Text>

                <Text style={styles.title}>
                    {item.name}
                </Text>

                <Text style={styles.heading}>
                    Deskripsi Part
                </Text>

                <Text style={styles.description}>
                    {item.description}
                </Text>

                <Text style={styles.heading}>
                    Fungsi Sparepart
                </Text>

                <Text style={styles.description}>
                    {item.function}
                </Text>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    image: {
        width: '100%',
        height: 280,
        resizeMode: 'contain',
    },

    content: {
        padding: 20,
    },

    category: {
        color: '#2B2D42',
        fontSize: 14,
        fontWeight: 'bold',
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#222222',
        marginTop: 8,
        marginBottom: 20,
    },

    heading: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 8,
        color: '#2B2D42',
    },

    description: {
        fontSize: 14,
        color: '#555555',
        lineHeight: 23,
    },

});
