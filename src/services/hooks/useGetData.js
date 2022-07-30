import { api } from '../api'

export const useGetData = () => {
  const getFilms = async () => {
      const response = await api.get('/films')
      return response.data

  }

  const getCharacters = async () => {
      const response = await api.get('/characters')
      return response.data

  }

  return {
    getFilms,
    getCharacters
  }
}