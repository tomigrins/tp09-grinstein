import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Interacciones from '../Interacciones/Index';
import type { Foto } from "../../services/api";

const Publicaciones: React.FC<{ Fotos?: Foto[]; cantLikes: number; setCantLikes: React.Dispatch<React.SetStateAction<number>>; publiAbierta: boolean; setpubliAbierta: React.Dispatch<React.SetStateAction<boolean>>; liked: boolean; setLiked: React.Dispatch<React.SetStateAction<boolean>> }> = ({ Fotos, cantLikes, setCantLikes, publiAbierta, setpubliAbierta, liked, setLiked }) => {
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
			<View style={styles.header}>
				<Image source={{ uri: fotoSrc }} style={styles.avatar} />
				<Text style={styles.username}>FanFelcha10</Text>
				<Text style={styles.time}>5h</Text>
			</View>

			<TouchableOpacity onPress={() => setpubliAbierta(true)} style={styles.imageWrap}>
				<Image source={{ uri: fotoSrc }} style={styles.photo} />
			</TouchableOpacity>

			<Interacciones cantLikes={cantLikes} setCantLikes={setCantLikes} liked={liked} setLiked={setLiked} />

			<View style={styles.description}>
				<Text>{cantLikes} likes</Text>
				<View style={styles.commentBlock}>
					<Text><Text style={{fontWeight: '700'}}>FanFelcha10</Text> El mejor programador</Text>
					<Text><Text style={{fontWeight: '700'}}>See translation</Text></Text>
				</View>
				<View>
					<Text>View all 100 comments</Text>
					<Text>Add a comment...</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 12,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 8,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#ccc',
		marginRight: 8,
	},
	username: {
		fontWeight: '700',
		marginRight: 8,
	},
	time: {
		color: '#666',
	},
	imageWrap: {
		alignItems: 'center',
	},
	photo: {
		width: '100%',
		height: 300,
		backgroundColor: '#eee',
	},
	description: {
		padding: 8,
	},
	commentBlock: {
		marginTop: 6,
	},
});

export default Publicaciones;