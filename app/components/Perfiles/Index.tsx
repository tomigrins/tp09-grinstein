import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import type { Foto } from "../../services/api";

const Perfiles: React.FC<{ Fotos?: Foto[] }> = ({ Fotos }) => {
  const fotoSrc = React.useMemo(() => {
    if (!Array.isArray(Fotos) || Fotos.length === 0) return '';
    const idx = Math.floor(Math.random() * Fotos.length);
    const item = Fotos[idx];
    return typeof item === 'string' ? item : item?.url ?? '';
  }, [Fotos]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: fotoSrc }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.username}>HolaSoyFanFlecha</Text>
        <Text style={styles.status}>Follows you</Text>
      </View>
    </View>
  );
}

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