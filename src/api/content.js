import Axios from "../libs/axios";
import qs from 'qs'

export const getList = (options) => {
  return Axios.get('/public/get_post_list?' + qs.stringify(options))
}
