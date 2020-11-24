import * as React from 'react'

export type HandleChange = React.ChangeEventHandler<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>

export type FlightInfo = {
  from: string
  to: string
  dateTime: string
  flightNumber: string
}

export type LuggageInfo = {
  luggageDescription: string
  weight: string
  luggagePhoto: string
}

export type ContactInfo = {
  name: string
  surname: string
  phone: string
  email: string
}

export type FlightInfoProps = FlightInfo & {
  handleChange: HandleChange
}

export type LuggageInfoProps = LuggageInfo & {
  handleChange: HandleChange
}

export type ContactInfoProps = ContactInfo & {
  handleChange: HandleChange
}

type FormViewValues = {
  flightInfo: FlightInfo
  luggageInfo: LuggageInfo
  contactInfo: ContactInfo
}

export type FormViewProps = {
  handleChange: HandleChange
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  values: FormViewValues
}

export type CarrierOffersListProps = {
  from: string
  to: string
  dateTime: string
  weight: string
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
