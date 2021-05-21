import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { Paper, Box, Drawer } from '@material-ui/core'
import { ArrowUpward } from '@material-ui/icons'
import { SecondaryButton } from '../../components'
import { OFFERS_LIST } from '../../fakeData'
import { GiveDrawer, OffersList, Filter } from './parts'
import { GiveFormFields, FilterFields } from './types'
import { Direction } from '../../components/DirectionsSelect/types'

export const Give = (props: RouteComponentProps) => {
  const [giveDrawerState, setGiveDrawerState] = useState(false)
  const [form, setForm] = useState<GiveFormFields>({
    flightFrom: null,
    flightTo: null,
    flightDate: '',
    flightNumber: '',
    luggageWeight: 0,
    luggageDescription: '',
    luggagePhoto: '',
    name: '',
    surname: '',
    phone: '',
    email: '',
  })

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

  return (
    <Box px={20} py={10}>
      <Paper>
        <Box px={6} py={4}>
          <Box pb={12} fontSize={40} fontWeight={300}>
            Предложения перевозчиков
          </Box>
          <Box position="relative">
            <Filter
              {...filterFields}
              onChangeDirectionField={onChangeDirectionField}
              onChangeField={onChangeField}
            />
            <OffersList offers={OFFERS_LIST} />
            <Box position="absolute" top="-100px" right="0">
              <SecondaryButton onClick={() => setGiveDrawerState(true)}>
                Отдать багаж
                <ArrowUpward style={{ marginLeft: '8px' }} />
              </SecondaryButton>
            </Box>
            <Drawer anchor="right" open={giveDrawerState} onClose={() => setGiveDrawerState(false)}>
              <GiveDrawer
                {...form}
                onChangeDirectionField={onChangeDirectionField}
                onChangeField={onChangeField}
                onSubmit={() => {}}
              />
            </Drawer>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
