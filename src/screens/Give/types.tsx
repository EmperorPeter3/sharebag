import * as React from 'react'
import { Bag, Flight } from '../Home/types'
import { Direction } from '../../components/DirectionsSelect/types'

export type OnChangeField = (
  field: string,
) => React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

export type OnChangeDirectionField = (
  field: string,
) => (event: any, direction: Direction | null) => void

export type GiveFormFields = {
  flightFrom: Direction | null
  flightTo: Direction | null
  flightDateFrom: string
  flightDateTo: string
  flightNumber: string
  luggageWeight: number
  luggageDescription: string
  luggagePhoto: any
}

export type FilterFields = Pick<
  GiveFormFields,
  'flightFrom' | 'flightTo' | 'flightDateFrom' | 'flightDateTo' | 'luggageWeight'
>

export type FlightInfoProps = Pick<
  GiveFormFields,
  'flightFrom' | 'flightTo' | 'flightDateFrom' | 'flightNumber'
> & {
  onChangeExactFlightInfo: (flight: Flight | null) => void
  onChangeField: OnChangeField
  onChangeDirectionField: OnChangeDirectionField
}

export type LuggageInfoProps = Pick<
  GiveFormFields,
  'luggageWeight' | 'luggageDescription' | 'luggagePhoto'
> & {
  onChangePhoto: (url: any) => void
  onChangeField: OnChangeField
}

export type FilterProps = FilterFields & {
  onSearch: (params: BagRequestsParams) => void
  onChangeField: OnChangeField
  onChangeDirectionField: OnChangeDirectionField
}

export type GiveDrawerProps = FlightInfoProps &
  LuggageInfoProps & {
    onChangeExactFlightInfo: (flight: Flight | null) => void
    onChangePhoto: (url: any) => void
    onChangeField: OnChangeField
    onChangeDirectionField: OnChangeDirectionField
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  }

export type OffersListProps = {
  offers: OfferCardProps[]
}

// type OfferPersonalInfo = {
//   name: string
//   rating: number
// }

// type OfferFlightInfo = {
//   flightNumber: string
//   dateTime: string
// }

// type OfferLuggageInfo = {
//   weight: number
//   price: number
// }

export type OfferCardProps = {
  arrivalStation: string
  bagPrice: number
  bagWeight: number
  date: string
  depatrureStation: string
  flightNumber: string
  price: number
  id: number
  onClick: (id: number) => void
}

export type BagRequestsParams = {
  from: string // date from
  to: string // date to
  depatrureStationCode: string
  arrivalStationCode: string
  typeId?: string
}

export type GiveBagRequestParams = {
  requestTypeId: 2
  bag: Bag
  flight: Flight
}
