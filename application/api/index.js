import axios from 'axios'
import { API_URL, PRODAM_KEY } from '@config'

export const endpoints: object = {
  //units: '/',
  //unitTypes: '/tipos-estabelecimentos'
  units: '/iv6ab',
  unitTypes: '/6et2z'

}

const request = (params: object) => (method: string) => (
  axios({
    baseURL: 'https://api.myjson.com/bins',
    headers: { Authorization: `Bearer ${PRODAM_KEY}` },
    method,
    ...params
  })
)

export default {
  get:    params => request(params)('GET'),
  post:   params => request(params)('POST'),
  put:    params => request(params)('PUT'),
  delete: params => request(params)('DELETE')
}