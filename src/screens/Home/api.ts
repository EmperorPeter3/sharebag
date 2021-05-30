import { httpClient } from '../../httpClient'
import { FlightParams, FlightsResponse, Flight, TakeBagRequestParams } from './types'

export const getFlights = async (params: FlightParams): Promise<Flight[]> =>
  httpClient
    .get('direction/getFlights', { params })
    .then(({ data }: { data: FlightsResponse }) => data.flights)

export const sendTakeBagRequest = async (body: TakeBagRequestParams) =>
  httpClient.post('bagRequest', body).then(({ data }: { data: any }) => data)
