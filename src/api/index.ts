import request from '/@/service'
import { useRequest } from '/@/hooks'
import type { IGetParams, IGetRes } from './types'
export const getArticleListPages = () => {
  return request<null, IGetRes>({
    url: '/api/article/list/0/json',
    method: 'GET',
  })
}
export const useArticleListPages = (data: IGetParams) => {
  return useRequest<IGetParams>(getArticleListPages, data)
}
