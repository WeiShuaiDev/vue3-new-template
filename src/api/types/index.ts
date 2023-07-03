export interface IGetParams {
  apiKey: string
}
export interface IGetRes {
  curPage: number
  datas: any[]
  offset: number
  over: boolean
  pageCount: number
  size: number
  total: number
}
