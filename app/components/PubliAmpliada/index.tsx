import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Perfiles from "../Perfiles/Index";
import Interacciones from '../Interacciones/Index';
import Comentario from '../Comentario/index';
import type { Foto } from "../../services/api";

const PubliAmpliada: React.FC<{ Fotos?: Foto[]; cantLikes: number; setCantLikes: React.Dispatch<React.SetStateAction<number>>; publiAbierta?: boolean; setpubliAbierta: React.Dispatch<React.SetStateAction<boolean>>; liked: boolean; setLiked: React.Dispatch<React.SetStateAction<boolean>> }> = ({ Fotos, cantLikes, setCantLikes, publiAbierta, setpubliAbierta, liked, setLiked }) => {
    const [fotoSrc, setFotoSrc] = useState('');

    useEffect(() => {
        if (fotoSrc) return;
        if (!Array.isArray(Fotos) || Fotos.length === 0) return;
        const idx = Math.floor(Math.random() * Fotos.length);
        const item = Fotos[idx];
        setFotoSrc(typeof item === 'string' ? item : item?.url ?? '');
    }, [Fotos, fotoSrc]);

    return (
        <View style={styles.container}>
            <View style={styles.photoWrap}>
                <Image source={{ uri: fotoSrc }} style={styles.photo} />
            </View>

            <View style={styles.info}>
                <View style={styles.creator}>
                    <Perfiles Fotos={Fotos} />
                    <TouchableOpacity onPress={() => setpubliAbierta(false)} style={styles.closeButton}>
                        <Text style={styles.closeText}>x</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.comments}>
                    <Comentario Fotos ={Fotos}/>
                    <Comentario Fotos ={Fotos}/>
                    <Comentario Fotos ={Fotos}/>
                </ScrollView>

                <View style={styles.interactionsRow}>
                    <Interacciones cantLikes={cantLikes} setCantLikes={setCantLikes} liked={liked} setLiked={setLiked} />
                    <View style={styles.likesInfo}>
                        <Text>Liked by <Text style={{fontWeight: '700'}}>FanFelcha10</Text> and <Text style={{fontWeight: '700'}}>{cantLikes} others</Text></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    photoWrap: {
        flex: 1,
        backgroundColor: '#eee',
    },
    photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    info: {
        width: 320,
        padding: 8,
    },
    creator: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    closeButton: {
        padding: 8,
    },
    closeText: {
        fontSize: 18,
    },
    comments: {
        marginTop: 8,
        flex: 1,
    },
    interactionsRow: {
        marginTop: 8,
    },
    likesInfo: {
        marginTop: 8,
    },
});

export default PubliAmpliada;