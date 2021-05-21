import * as React from 'react'

export type HandleChange = React.ChangeEventHandler<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>

export type SetFieldValue = (field: string, value: any) => void

export type FlightInfo = {
  from: string
  to: string
  dateTime: string
  flightNumber: string
  ticketPhoto: any
}

export type LuggageInfo = {
  luggageDescription: string
  maxWeight: string
  ownerPrice: string
}

export type ContactInfo = {
  name: string
  surname: string
  phone: string
  email: string
}

export type FlightInfoProps = FlightInfo & {
  handleChange: HandleChange
  setFieldValue: SetFieldValue
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
  setFieldValue: SetFieldValue
  handleChange: HandleChange
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  values: FormViewValues
}
