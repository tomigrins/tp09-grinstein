import React from 'react';
import HistoriasBar from '../components/HistoriasBar/Index';
import Publicaciones from '../components/Publicaciones/Index';
import PubliAmpliada from '../components/PubliAmpliada';

const Feed = ({ Fotos = [], cantLikes, setCantLikes, liked, setLiked, publiAbierta, setpubliAbierta }) => {
	if (publiAbierta) {
		return (
			<PubliAmpliada
				Fotos={Fotos}
				cantLikes={cantLikes}
				setCantLikes={setCantLikes}
				publiAbierta={publiAbierta}
				setpubliAbierta={setpubliAbierta}
				liked={liked}
				setLiked={setLiked}
			/>
		);
	}

	return (
		<>
			<HistoriasBar Fotos={Fotos} />
			<Publicaciones
				Fotos={Fotos}
				cantLikes={cantLikes}
				setCantLikes={setCantLikes}
				publiAbierta={publiAbierta}
				setpubliAbierta={setpubliAbierta}
				liked={liked}
				setLiked={setLiked}
			/>
		</>
	);
};

export default Feed;

