import axios from 'axios'
import { useQuery } from 'react-query'

const getRoastHistory = async () => {
  const { data } = await axios.get('/api/roasts')
  return data
}

const useRoasts = () => {
  return useQuery('roasts', getRoastHistory)
}

export default useRoasts
