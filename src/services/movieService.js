import axios from 'axios'

const key = process.env.VUE_APP_API_KEY
const url = process.env.VUE_APP_API_URL

export const getMovies = async () => {
  try {
    const response = await axios.get(`${url}?api_key=${key}&page=1`)
    return response.data.results;
  } catch (error) {
    console.error("Couldn't fetch movies:", error)
    return []
  }
}
