import {useEffect, useState} from 'react';
// change React to useEffect hook

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// ae5a62f9
const API_URL = 'https://www.omdbapi.com/?ae5a62f9';


const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies('Batman');
    }, []);
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    
        setMovies(data.Search);
      };


    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && searchMovies(searchTerm)}
                placeholder= 'Search for Movies...'
                />
                <img src= {SearchIcon} 
                alt='search' 
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0 ? (
                    <div className="container">
                    {movies.map((movie) => {
                        return <MovieCard movie={movie} />
                    })
                    }
                    </div>
                ) : (
                    <div className="empty">
                    <h2>No movies found</h2>
                    </div>
            )}
        </div>
    );
};

// we must always export components to call them in other places, index.js
export default App;