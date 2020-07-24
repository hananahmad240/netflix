import React, { useState, useEffect } from 'react';
import instance from '../axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchURL, isLargeRow }) {
	const [movies, setMovies] = useState([]); // array
	const [trailerUrl, setTrailerUrl] = useState('');

	useEffect(() => {
		async function fetchData() {
			const request = await instance.get(fetchURL);
			// console.log(request.data.results[0]);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchURL]);

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};
	function handleClick(movie) {
		if (trailerUrl) {
			setTrailerUrl('');
		} else {
			console.log(movie);
			movieTrailer(movie.title || movie.name || '')
				.then((url) => {
					console.log(url);
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get('v'));
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="row-posters">
				{movies.map((movie) => (
					<img
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						onClick={() => handleClick(movie)}
						alt=""
						key={movie.id}
						className={`row-poster ${isLargeRow && 'row-poster-large'}`}
					/>
				))}
			</div>
			{trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
		</div>
	);
}

export default Row;
