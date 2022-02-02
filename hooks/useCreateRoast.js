import axios from 'axios'
import { useMutation } from 'react-query'

const postRoast = async (payload) => {
  const { data } = await axios.post(`/api/roasts`, payload)
  return data
}

const useCreateRoast = () => {
  return useMutation(postRoast)
}

export default useCreateRoast
