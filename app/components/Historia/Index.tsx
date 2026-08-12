import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import type { Foto } from "../../services/api";

const Historia: React.FC<{ Fotos?: Foto[] }> = ({ Fotos }) => {
    const [fotoSrc, setFotoSrc] = useState('');

    useEffect(() => {
        if (fotoSrc) return;
        if (!Array.isArray(Fotos) || Fotos.length === 0) return;
        const idx = Math.floor(Math.random() * Fotos.length);
        const item = Fotos[idx];
        setFotoSrc(typeof item === 'string' ? item : item?.url ?? '');
    }, [Fotos, fotoSrc]);

    return (
        <View style={styles.historia}>
            <Image source={{ uri: fotoSrc }} style={styles.image} />
            <Text style={styles.username}>AguanteFlecha</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    historia: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#ddd',
    },
    username: {
        marginTop: 6,
        fontSize: 12,
    },
});

export default Historia;