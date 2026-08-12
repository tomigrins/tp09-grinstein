import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Historia from '../Historia/Index';
import type { Foto } from "../../services/api";

const HistoriasBar: React.FC<{ Fotos: Foto[] }> = ({ Fotos }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Historia Fotos={Fotos} />
                <Historia Fotos={Fotos} />
                <Historia Fotos={Fotos} />
                <Historia Fotos={Fotos} />
                <Historia Fotos={Fotos} />
                <Historia Fotos={Fotos} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
    },
});

export default HistoriasBar;