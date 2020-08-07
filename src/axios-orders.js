import axios from 'axios'

const instance = axios.create({
  baseURL: "https://burger-builder-react-4b801.firebaseio.com"
})

export default instance