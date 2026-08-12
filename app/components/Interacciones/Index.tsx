import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Like from '../../../assets/like.png';
import Compartir from '../../../assets/compartir.png';
import Comentario from '../../../assets/comentario.png';
import Guardar from '../../../assets/Guardar.png';
import LikeTrue from '../../../assets/LikeTrue.png';

type Props = {
	cantLikes: number;
	setCantLikes: React.Dispatch<React.SetStateAction<number>>;
	liked: boolean;
	setLiked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Interacciones: React.FC<Props> = ({ cantLikes, setCantLikes, liked, setLiked }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					setLiked(!liked);
					setCantLikes(prev => (liked ? prev - 1 : prev + 1));
				}}
			>
				<Image source={liked ? LikeTrue : Like} style={styles.icon} accessibilityLabel={liked ? 'liked' : 'like'} />
			</TouchableOpacity>

			<TouchableOpacity>
				<Image source={Comentario} style={styles.icon} accessibilityLabel="comment" />
			</TouchableOpacity>

			<TouchableOpacity>
				<Image source={Compartir} style={styles.icon} accessibilityLabel="share" />
			</TouchableOpacity>

			<TouchableOpacity style={styles.saveButton}>
				<Image source={Guardar} style={styles.icon} accessibilityLabel="save" />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		width: 28,
		height: 28,
		marginHorizontal: 6,
	},
	saveButton: {
		marginLeft: 12,
	},
});

export default Interacciones;