import { Direction } from '../../components/DirectionsSelect/types'
import { OnChangeField, OnChangeDirectionField } from '../Give/types'

export type FileEventTarget = HTMLInputElement & EventTarget & { files: FileList }

export type TakeFormProps = {
  flightFrom: Direction | null
  flightTo: Direction | null
  flightDate: string
  flightNumber: string
  flightTicketPhoto: string
  luggageDescription: string
  luggageWeight: number
  luggagePrice: number
}

export type FlightInfoProps = Pick<
  TakeFormProps,
  'flightFrom' | 'flightTo' | 'flightDate' | 'flightNumber' | 'flightTicketPhoto'
> & {
  onChangeField: OnChangeField
  onChangeDirectionField: OnChangeDirectionField
  onChangeExactFlightInfo: (flight: Flight | null) => void
}

export type LuggageInfoProps = Pick<
  TakeFormProps,
  'luggageDescription' | 'luggageWeight' | 'luggagePrice'
> & {
  onChangeField: OnChangeField
}

export type FlightParams = {
  from: string
  to: string
  date: string
  offset?: string
  limit?: string
  lang?: string
}

export type Flight = {
  arrivalStationCode: string
  depatrureStationCode: string
  arrivalTime: string
  departureTime: string
  flightNumber: string
  ticketPhoto: string | null
}

export type Bag = {
  descriprion: string
  weight: number
  price?: number
  photo?: string
}

export type Passenger = {
  id: number
  email: string
  password: string
  phoneNumber: string
  skype: string
  firstName: string
  lastName: string
}

export type FlightsResponse = {
  flights: Flight[]
  total: number
}

export type TakeBagRequestParams = {
  requestTypeId: 1
  bag: Bag
  flight: Flight
}
