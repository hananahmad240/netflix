import React from 'react';
import './App.css';
import requests from './requests';

// components
import Row from './components/Row';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App">
			{/* nabbar */}
			<Navbar></Navbar>
			<Banner></Banner>
			<Row
				title="NETFLIX ORIGINAL"
				fetchURL={requests.fetchNetflixOriginals}
				isLargeRow
			></Row>
			<Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
			<Row title="Top Rated" fetchURL={requests.fetchTopRated}></Row>
			<Row title="Action Movie" fetchURL={requests.fetchActionMovie}></Row>
			<Row title="Commedy Movie" fetchURL={requests.fetchComedyMovie}></Row>
			<Row title="Horror Movie" fetchURL={requests.fetchHorrorMovie}></Row>
			<Row title="Romance Movie" fetchURL={requests.fetchRomanceMovie}></Row>
			<Row title="Documentaries" fetchURL={requests.fetchDocumentaries}></Row>
		</div>
	);
}

export default App;
