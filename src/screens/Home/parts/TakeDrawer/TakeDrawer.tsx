import React, { useContext, useState } from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { FlightInfo, LuggageInfo } from './sections'
import { Direction } from '../../../../components/DirectionsSelect/types'
import { sendTakeBagRequest } from '../../api'
import { NotificationSystemContext } from '../../../../components'
import { Flight, TakeFormProps } from '../../types'

const DEFAULT_STATE: TakeFormProps = {
  flightFrom: null,
  flightTo: null,
  flightDate: '',
  flightNumber: '',
  flightTicketPhoto: '',
  luggageWeight: 1,
  luggageDescription: '',
  luggagePrice: 0,
}

export const TakeDrawer = () => {
  const [form, setForm] = useState<TakeFormProps>(DEFAULT_STATE)
  const [exactFlightInfo, setExactFlightInfo] = useState<Flight | null>(null)
  const { addNotification } = useContext(NotificationSystemContext)

  const flightInfo = {
    flightFrom: form.flightFrom,
    flightTo: form.flightTo,
    flightDate: form.flightDate,
    flightNumber: form.flightNumber,
    flightTicketPhoto: form.flightTicketPhoto,
  }
  const luggageInfo = {
    luggageWeight: form.luggageWeight,
    luggageDescription: form.luggageDescription,
    luggagePrice: form.luggagePrice,
  }

  const onChangeField =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [field]: event.target.value })
    }

  const onChangeDirectionField = (field: string) => (event: any, direction: Direction | null) => {
    setForm({ ...form, [field]: direction })
  }

  const onSendBagRequest = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!exactFlightInfo) return
    try {
      await sendTakeBagRequest({
        requestTypeId: 1,
        bag: {
          descriprion: form.luggageDescription,
          weight: form.luggageWeight,
          price: form.luggagePrice,
        },
        flight: {
          arrivalStationCode: form.flightFrom!.id,
          depatrureStationCode: form.flightTo!.id,
          arrivalTime: exactFlightInfo.arrivalTime,
          departureTime: exactFlightInfo.departureTime,
          flightNumber: form.flightNumber,
          ticketPhoto: null,
        },
      })
      addNotification({ level: 'success', message: 'Заявка успешно создана!' })
    } catch (error) {
      addNotification({ level: 'error', message: error })
    }
  }

  const disabled = !form.flightFrom || !form.flightTo || !form.flightNumber

  return (
    <Box width={570}>
      <Box bgcolor="primary.main" color="white" py={2} pl={4}>
        Заявка на прием груза
      </Box>
      <Box my={1} mx={4} color="grey.500">
        <Typography>
          Пожалуйста, заполните данные о рейсе, которым вы летите и о грузе, который вы готовы
          принять. По возможности приложите фото вашего билета или посадочного талона. Также укажите
          контактные данные, при помощи которых с вами смогут связаться.
        </Typography>
      </Box>
      <Box mx={4}>
        <form onSubmit={onSendBagRequest}>
          <FlightInfo
            onChangeExactFlightInfo={setExactFlightInfo}
            onChangeDirectionField={onChangeDirectionField}
            onChangeField={onChangeField}
            {...flightInfo}
          />
          <LuggageInfo onChangeField={onChangeField} {...luggageInfo} />
          <Box display="flex" justifyContent="flex-end" mt={2} ml={4}>
            <Button
              disabled={disabled}
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Разместить заявку
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
