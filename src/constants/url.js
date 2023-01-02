import { API_KEY, baseUrl } from './constants'

export const originals = `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`
export const trending = `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US'`
export const action = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`
export const horror = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentaries = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`
export const crime = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=80`
export const fantasy = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=14`
export const sci_fi = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=878`
export const adventure = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=12`
export const animation = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=16`
export const mystery = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=9648`
export const war = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10752`