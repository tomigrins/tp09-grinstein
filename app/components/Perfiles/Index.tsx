import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import type { Foto } from "../../services/api";

const Perfiles: React.FC<{
    Fotos?: Foto[];
    fotoPerfil?: string;
    username?: string;
}> = ({
    Fotos = [],
    fotoPerfil,
    username = 'HolaSoyFanFlecha',
}) => {

    const fotoSrc =
        fotoPerfil ||
        (
            Fotos.length > 0
                ? typeof Fotos[0] === 'string'
                    ? Fotos[0]
                    : Fotos[0]?.url || ''
                : ''
        );

    return (
        <View style={styles.container}>

            <Image
                source={{ uri: fotoSrc }}
                style={styles.image}
            />

            <View style={styles.textWrap}>

                <Text style={styles.username}>
                    {username}
                </Text>

                <Text style={styles.status}>
                    Follows you
                </Text>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    image: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#ddd',
        marginRight: 8,
    },

    textWrap: {
        flex: 1,
    },

    username: {
        fontWeight: '700',
        fontSize: 14,
    },

    status: {
        color: '#666',
        fontSize: 12,
        marginTop: 2,
    },
});

export default Perfiles;