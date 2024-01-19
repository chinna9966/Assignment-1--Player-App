import axios from 'axios'
const URL = 'http://localhost:8080'

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data)
  } catch (error) {
    console.log('Internal Serval Isuuse', error)
  }
}

export const getUser = async () => {
  try {
    return await axios.get(`${URL}/all`)
  } catch (err) {
    console.log('Getting error while fetching the data', err)
  }
}
