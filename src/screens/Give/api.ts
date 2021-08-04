import { httpClient } from '../../httpClient'
import { BagRequestsParams, GiveBagRequestParams } from './types'

export const getBagRequests = async (params: BagRequestsParams) =>
  httpClient.get('bagRequest', { params }).then(({ data }: { data: any }) => data)

export const sendGiveBagRequest = async (body: GiveBagRequestParams) =>
  httpClient.post('bagRequest', body).then(({ data }: { data: any }) => data)

export const getOfferInfo = async (id: number) =>
  httpClient.get(`bagRequest/${id}`).then(({ data }: { data: any }) => data)
