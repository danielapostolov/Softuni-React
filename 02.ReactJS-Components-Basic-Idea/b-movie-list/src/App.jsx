import MovieList from './components/MovieList'
import Time from './components/Time'
import './App.css'

function App() {
    const movies = [
        'The Matrix',
        'Man of Steel',
        'Lord of the Rings',
        'Case for Christ',
    ];

    return (
        <>
            <MovieList movies={movies} title="My Movies" />

            <img src="https://images.thedirect.com/media/article_full/disney-movies-titles.jpg" alt="" width={500} />

            <Time />
        </>
    );
}

export default App
