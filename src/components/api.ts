import { httpClient } from '../httpClient'
import { Passenger } from '../screens/Home/types'

export const getUserAccount = async (): Promise<Passenger> =>
  httpClient.get('Account').then(({ data: { user } }: { data: { user: Passenger } }) => user)
