const requets = {
    fetchTrending: `/trending/all/week?api_key=aa4a6e4676c6ce1e6b03f3895de771ff&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=aa4a6e4676c6ce1e6b03f3895de771ff&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=aa4a6e4676c6ce1e6b03f3895de771ff&language=en-US`,
    fetchActionMovie: `/discover/movie?api_key=aa4a6e4676c6ce1e6b03f3895de771ff&with_genres=28`,
    fetchComedyMovie: `/discover/movie?api_key=aa4a6e4676c6ce1e6b03f3895de771ff&with_genres=35`,
    fetchHorrorMovie: `/discover/movie?api_key=aa4a6e4676c6ce1e6b03f3895de771ff&with_genres=27`,
    fetchRomanceMovie: `/discover/movie?api_key=aa4a6e4676c6ce1e6b03f3895de771ff&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=aa4a6e4676c6ce1e6b03f3895de771ff&with_genres=99`,
}

export default requets;