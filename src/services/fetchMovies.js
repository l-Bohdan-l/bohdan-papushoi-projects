import axios from 'axios';

const API_KEY = '0e4aaee08aabcf1cd893aec1f6e895b9';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => { 
    // https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>
    const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
};
 
export const fetchMovieCast = async (movieId) => { 
     //api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => { 
 //api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);

    return response.data.results;

};

export const fetchMoviesByQuery = async (query) => { 
    // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
//   const KEY = `0e4aaee08aabcf1cd893aec1f6e895b9`;
//   const baseUrl = `https://api.themoviedb.org/3/`;
//   const endPoint = `search/movie?`;
//   const url =
//     baseUrl +
//     endPoint +
//     `api_key=${KEY}` +
//     `&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);

    return response.data.results;
};