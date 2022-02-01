import axios from 'axios'
import { useQuery } from 'react-query'

const getRoast = async (id) => {
  const { data } = await axios.get(`/api/roasts/${id}`)
  return data
}

const useRoast = (id) => {
  return useQuery(['roast', id], () => getRoast(id))
}

export default useRoast
