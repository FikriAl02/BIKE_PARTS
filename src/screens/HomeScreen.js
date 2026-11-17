
import React, { useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

import SparepartCard from '../components/SparepartCard';
import SearchBar from '../components/SearchBar';

const spareparts = [
    {
        id: '1',
        name: 'Frame(Rangka) Sepeda',
        category: 'Rangka',

        image: require('../../assets/images/RANGKA SEPEDA.jpeg'),

        description: 'Frame merupakan rangka utama sepeda.',
        function: 'Menopang seluruh komponen sepeda.'
    },
    {
        id: '2',
        name: 'Roda Sepeda',
        category: 'Wheelset',
        image: require('../../assets/images/WHEELSET.jpeg'),
        description: 'Roda merupakan komponen yang memungkinkan sepeda bergerak secara optimal',
        function: 'Membantu sepeda berjalan dan menjaga kestabilan.',
    },
    {
        id: '3',
        name: 'Rem Sepeda',
        category: 'Pengereman',
        image: require('../../assets/images/REM SEPEDA U BRAKE.jpeg'),
        description: 'Rem merupakan komponen penting dalam sistem keamanan sepeda.',
        function: 'Memperlambat dan menghentikan laju sepeda.',
    },
    {
        id: '4',
        name: 'Rantai Sepeda',
        category: 'Penggerak',
        image: require('../../assets/images/RANTAI SEPEDA.jpeg'),
        description: 'Rantai menghubungkan gear depan dengan gear belakang.',
        function: 'Meneruskan tenaga kayuhan pedal menuju roda belakang.',
    },
    {
        id: '5',
        name: 'Pedal Sepeda',
        category: 'Penggerak',
        image: require('../../assets/images/PEDAL SEPEDA.jpeg'),
        description: 'Pedal adalah tempat pijakan kaki saat mengayuh.',
        function: 'Menerima tenaga dari kaki untuk memutar crank dan menggerakkan sepeda.',
    },
    {
        id: '6',
        name: 'Stang Sepeda',
        category: 'Kemudi',
        image: require('../../assets/images/STANG SUNRISE.jpeg'),
        description: 'Stang merupakan bagian yang digunakan untuk mengendalikan sepeda.',
        function: 'Mengatur arah belok dan membantu pengendalian sepeda.',
    },
];

export default function HomeScreen({ navigation }) {

    const [search, setSearch] = useState('');

    const filteredSpareparts = spareparts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ScrollView style={styles.container}>

            <View style={styles.banner}>
                <Text style={styles.bannerTitle}>
                    Sparepart Kalcer Sepeda
                </Text>

               
            </View>

            <View style={styles.content}>

                <SearchBar
                    value={search}
                    onChangeText={setSearch}
                />

                <Text style={styles.title}>
                    Etalase Sparepart
                </Text>

                <Text style={styles.subtitle}>
                    Pilih Part untuk mengetahui fungsinya
                </Text>

                <View style={styles.grid}>

                    {filteredSpareparts.map((item) => (

                        <SparepartCard
                            key={item.id}
                            item={item}
                            onPress={() =>
                                navigation.navigate('Detail', {
                                    item: item
                                })
                            }
                        />

                    ))}

                </View>

                {filteredSpareparts.length === 0 && (
                    <Text style={styles.empty}>
                        Sparepart tidak ditemukan.
                    </Text>
                )}

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F5F0',
    },

    banner: {
        backgroundColor: '#2B2D42',
        padding: 22,
    },


    bannerTitle: {
        fontSize: 38,
        fontFamily: 'Bungee',
        color: '#FFFFFF',
        letterSpacing: 1,
        textAlign: 'center',
    },


    bannerSubtitle: {
        fontSize: 13,
        color: '#E0F2E9',
        marginTop: 5,
    },

    content: {
        padding: 15,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222222',
    },

    subtitle: {
        fontSize: 12,
        color: '#777777',
        marginTop: 5,
        marginBottom: 15,
    },

    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    empty: {
        textAlign: 'center',
        color: '#777777',
        marginTop: 30,
    },

});
