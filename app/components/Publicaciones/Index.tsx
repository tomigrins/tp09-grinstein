import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import Perfiles from '../Perfiles/Index';

const Publicaciones = ({
    Fotos = [],
    cantLikes,
    setCantLikes,
    publiAbierta,
    setpubliAbierta,
    liked,
    setLiked,
    perfil,
    setPublicacionSeleccionada,
}) => {

    const fotoPerfil =
        perfil?.fotoPerfil || '';

    const username =
        perfil?.username || 'HolaSoyFanFlecha';

    return (
        <View style={styles.container}>

            {Fotos.map((foto, index) => {

                const fotoUrl =
                    typeof foto === 'string'
                        ? foto
                        : foto?.url || '';

                return (
                    <View
                        key={foto?.id ?? index}
                        style={styles.publicacion}
                    >

                        {/* HEADER DEL USUARIO */}
                        <View style={styles.header}>

                            <Perfiles
                                Fotos={Fotos}
                                fotoPerfil={fotoPerfil}
                                username={username}
                            />

                        </View>

                        {/* PUBLICACIÓN */}
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {

                                // Guardamos EXACTAMENTE esta foto
                                setPublicacionSeleccionada(foto);

                                // Abrimos detalle
                                setpubliAbierta(true);
                            }}
                        >
                            <Image
                                source={{ uri: fotoUrl }}
                                style={styles.photo}
                            />
                        </TouchableOpacity>

                        {/* INFO */}
                        <View style={styles.info}>

                            <Text style={styles.likes}>
                                {cantLikes} likes
                            </Text>

                        </View>

                    </View>
                );
            })}

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor: '#fff',
    },

    publicacion: {
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 20,
    },

    header: {
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },

    photo: {
        width: '100%',
        aspectRatio: 1,
        backgroundColor: '#eee',
    },

    info: {
        paddingHorizontal: 12,
        paddingVertical: 8,
    },

    likes: {
        fontWeight: '700',
        fontSize: 14,
    },

});

export default Publicaciones;