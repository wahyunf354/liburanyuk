import axios from 'axios';

const instence = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`
})

export default instence;