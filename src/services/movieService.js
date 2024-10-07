import axios from 'axios'

const key = '4170bf35f7a61b8012d65de6ad644b9b'
const url = 'https://api.themoviedb.org/3/movie/popular'

export const getMovies = async () => {
  try {
    const response = await axios.get(`${url}?api_key=${key}&page=1`)
    return response.data.results;
  } catch (error) {
    console.error("Couldn't fetch movies:", error)
    return []
  }
}
