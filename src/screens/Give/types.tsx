import { Direction } from '../../components/DirectionsSelect/types'
import * as React from 'react'

export type OnChangeField = (
  field: string,
) => React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

export type OnChangeDirectionField = (
  field: string,
) => (event: any, direction: Direction | null) => void

export type GiveFormFields = {
  flightFrom: Direction | null
  flightTo: Direction | null
  flightDate: string
  flightNumber: string
  luggageWeight: number
  luggageDescription: string
  luggagePhoto: string
  name: string
  surname: string
  phone: string
  email: string
}

export type FilterFields = Pick<
  GiveFormFields,
  'flightFrom' | 'flightTo' | 'flightDate' | 'luggageWeight'
>

export type FlightInfoProps = Pick<
  GiveFormFields,
  'flightFrom' | 'flightTo' | 'flightDate' | 'flightNumber'
> & {
  onChangeField: OnChangeField
  onChangeDirectionField: OnChangeDirectionField
}

export type LuggageInfoProps = Pick<
  GiveFormFields,
  'luggageWeight' | 'luggageDescription' | 'luggagePhoto'
> & {
  onChangeField: OnChangeField
}

export type ContactInfoProps = Pick<GiveFormFields, 'name' | 'surname' | 'phone' | 'email'> & {
  onChangeField: OnChangeField
}

export type FilterProps = FilterFields & {
  onChangeField: OnChangeField
  onChangeDirectionField: OnChangeDirectionField
}

export type GiveDrawerProps = FlightInfoProps &
  LuggageInfoProps &
  ContactInfoProps & {
    onChangeField: OnChangeField
    onChangeDirectionField: OnChangeDirectionField
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  }

export type OffersListProps = {
  offers: OfferCardProps[]
}

type OfferPersonalInfo = {
  name: string
  rating: number
}

type OfferFlightInfo = {
  flightNumber: string
  dateTime: string
}

type OfferLuggageInfo = {
  weight: number
  price: number
}

export type OfferCardProps = {
  personalInfo: OfferPersonalInfo
  flightInfo: OfferFlightInfo
  luggageInfo: OfferLuggageInfo
}
