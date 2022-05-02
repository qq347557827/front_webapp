import Axios from '../libs/axios'
import qs from 'qs'

export const getList = (options) => {
  return Axios.get('/public/get_post_list?' + qs.stringify(options))
}

export const getPostDetail = (tid) => {
  return Axios.get('/public/content_detail', {
    params: {
      tid,
    },
  })
}

export const getCommentList = (tid) => {
  return Axios.get('/public/comments', {
    params: {
      tid,
    },
  })
}
