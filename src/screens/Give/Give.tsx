import React, { useState, useContext } from 'react'
import { RouteComponentProps } from 'react-router'
import { Paper, Box, Drawer, Button } from '@material-ui/core'
import { ArrowUpward } from '@material-ui/icons'
import { GiveDrawer, OffersList, Filter } from './parts'
import * as api from './api'
import { NotificationSystemContext } from '../../components'
import { Direction } from '../../components/DirectionsSelect/types'
import { GiveFormFields, FilterFields, BagRequestsParams } from './types'
import { Flight } from '../Home/types'

const DEFAULT_STATE = {
  flightFrom: null,
  flightTo: null,
  flightDate: '',
  flightNumber: '',
  luggageWeight: 1,
  luggageDescription: '',
  luggagePhoto: '',
}

export const Give = (props: RouteComponentProps) => {
  const [giveDrawerState, setGiveDrawerState] = useState(false)
  const [form, setForm] = useState<GiveFormFields>(DEFAULT_STATE)
  const [exactFlightInfo, setExactFlightInfo] = useState<Flight | null>(null)
  const [suggestions, setSuggestions] = useState<any>([])
  const { addNotification } = useContext(NotificationSystemContext)

  const filterFields: FilterFields = {
    flightFrom: form.flightFrom,
    flightTo: form.flightTo,
    flightDate: form.flightDate,
    luggageWeight: form.luggageWeight,
  }

  const onChangeField =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [field]: event.target.value })
    }

  const onChangeDirectionField = (field: string) => (event: any, direction: Direction | null) => {
    setForm({ ...form, [field]: direction })
  }

  const onChangePhoto = (url: any) => {
    setForm({ ...form, luggagePhoto: url })
  }

  const onSearch = async (params: BagRequestsParams) => {
    const result = await api.getBagRequests(params)
    setSuggestions(result)
  }

  const onSendBagRequest = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!exactFlightInfo) return
    try {
      await api.sendGiveBagRequest({
        requestTypeId: 2,
        bag: {
          descriprion: form.luggageDescription,
          weight: form.luggageWeight,
          photo: form.luggagePhoto,
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

  return (
    <Box px={20} py={10}>
      <Paper>
        <Box px={6} py={4}>
          <Box display="flex" justifyContent="space-between" pb={12}>
            <Box fontSize={40} fontWeight={300}>
              Предложения перевозчиков
            </Box>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              onClick={() => setGiveDrawerState(true)}
            >
              Отдать багаж
              <ArrowUpward style={{ marginLeft: '8px' }} />
            </Button>
          </Box>
          <Box position="relative">
            <Filter
              {...filterFields}
              onChangeDirectionField={onChangeDirectionField}
              onChangeField={onChangeField}
              onSearch={onSearch}
            />
            <OffersList offers={suggestions} />
            <Drawer anchor="right" open={giveDrawerState} onClose={() => setGiveDrawerState(false)}>
              <GiveDrawer
                {...form}
                onChangeExactFlightInfo={setExactFlightInfo}
                onChangeDirectionField={onChangeDirectionField}
                onChangeField={onChangeField}
                onChangePhoto={onChangePhoto}
                onSubmit={onSendBagRequest}
              />
            </Drawer>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
