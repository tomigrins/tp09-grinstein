import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import type { Foto } from "../../services/api";

const Comentario: React.FC<{ Fotos?: Foto[] }> = ({ Fotos }) => {
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
      <Image source={{ uri: fotoSrc }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.username}>HolaSoyFanFlecha</Text>
        <Text style={styles.comment}>Que fotaza!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    marginRight: 8,
  },
  textWrap: {
    flex: 1,
  },
  username: {
    fontWeight: '700',
    fontSize: 12,
  },
  comment: {
    fontSize: 12,
    marginTop: 2,
    color: '#333',
  },
});

export default Comentario;