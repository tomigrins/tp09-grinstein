import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import HistoriasBar from '../components/HistoriasBar/Index';
import Publicaciones from '../components/Publicaciones/Index';
import PubliAmpliada from '../components/PubliAmpliada';

const Feed = ({
    Fotos = [],
    cantLikes,
    setCantLikes,
    liked,
    setLiked,
    publiAbierta,
    setpubliAbierta,
}) => {

    const perfil = {
        username: 'HolaSoyFanFlecha',

        fotoPerfil:
            Array.isArray(Fotos) && Fotos.length > 0
                ? typeof Fotos[0] === 'string'
                    ? Fotos[0]
                    : Fotos[0]?.url || ''
                : '',
    };

    const [publicacionSeleccionada, setPublicacionSeleccionada] =
        useState(null);

    if (publiAbierta && publicacionSeleccionada) {
        return (
            <PubliAmpliada
                Fotos={Fotos}
                publicacion={publicacionSeleccionada}
                cantLikes={cantLikes}
                setCantLikes={setCantLikes}
                publiAbierta={publiAbierta}
                setpubliAbierta={(valor) => {
                    setpubliAbierta(valor);

                    if (!valor) {
                        setPublicacionSeleccionada(null);
                    }
                }}
                liked={liked}
                setLiked={setLiked}
                perfil={perfil}
            />
        );
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <HistoriasBar Fotos={Fotos} />

            <Publicaciones
                Fotos={Fotos}
                cantLikes={cantLikes}
                setCantLikes={setCantLikes}
                publiAbierta={publiAbierta}
                setpubliAbierta={setpubliAbierta}
                liked={liked}
                setLiked={setLiked}
                perfil={perfil}

                setPublicacionSeleccionada={setPublicacionSeleccionada}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    content: {
        paddingBottom: 20,
    },
});

export default Feed;