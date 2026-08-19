import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Perfiles from "../Perfiles/Index";
import Interacciones from '../Interacciones/Index';
import Comentario from '../Comentario/index';

const PubliAmpliada = ({
    Fotos = [],
    publicacion,
    cantLikes,
    setCantLikes,
    publiAbierta,
    setpubliAbierta,
    liked,
    setLiked,
    perfil,
}) => {

    const navigation = useNavigation();

    const username =
        perfil?.username || 'HolaSoyFanFlecha';

    const fotoPerfil =
        perfil?.fotoPerfil || '';

    const fotoPublicacion =
        typeof publicacion === 'string'
            ? publicacion
            : publicacion?.url || '';

    return (
        <View style={styles.container}>

            {/* HEADER */}
            <View style={styles.creator}>

                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Perfil', {
                            username,
                            fotoPerfil,
                        })
                    }
                    activeOpacity={0.7}
                >
                    <Perfiles
                        Fotos={Fotos}
                        fotoPerfil={fotoPerfil}
                        username={username}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setpubliAbierta(false)}
                    style={styles.closeButton}
                >
                    <Text style={styles.closeText}>
                        x
                    </Text>
                </TouchableOpacity>

            </View>

            {/* MISMA FOTO QUE SE TOCÓ EN FEED */}
            <View style={styles.photoWrap}>

                <Image
                    source={{ uri: fotoPublicacion }}
                    style={styles.photo}
                />

            </View>

            {/* INFORMACIÓN */}
            <View style={styles.info}>

                <View style={styles.interactionsRow}>

                    <Interacciones
                        cantLikes={cantLikes}
                        setCantLikes={setCantLikes}
                        liked={liked}
                        setLiked={setLiked}
                    />

                    <View style={styles.likesInfo}>

                        <Text>
                            Liked by{' '}
                            <Text style={{ fontWeight: '700' }}>
                                FanFelcha10
                            </Text>{' '}
                            and{' '}
                            <Text style={{ fontWeight: '700' }}>
                                {cantLikes} others
                            </Text>
                        </Text>

                    </View>

                </View>

                <ScrollView style={styles.comments}>

                    <Comentario Fotos={Fotos} />
                    <Comentario Fotos={Fotos} />
                    <Comentario Fotos={Fotos} />

                </ScrollView>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    creator: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },

    closeButton: {
        padding: 8,
    },

    closeText: {
        fontSize: 22,
        fontWeight: '600',
    },

    photoWrap: {
        width: '100%',
        aspectRatio: 1,
        backgroundColor: '#eee',
    },

    photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    info: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 12,
    },

    interactionsRow: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },

    likesInfo: {
        marginTop: 8,
    },

    comments: {
        flex: 1,
        width: '100%',
        marginTop: 8,
    },

});

export default PubliAmpliada;