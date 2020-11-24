import React from 'react'
import { RouteComponentProps } from 'react-router'
import axios from 'axios'
import { Formik } from 'formik'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { yellow, grey } from '@material-ui/core/colors'

import { FormView } from './FormView'

export const TakeForm = ({ history }: RouteComponentProps) => {
  return (
    <Box width={570}>
      <Box bgcolor={yellow[400]} pt={2} pl={8} pb={2}>
        Заявка на прием груза
      </Box>
      <Box px={8} pt={6} pb={10} color={grey[500]}>
        <Typography>
          Пожалуйста, заполните данные о рейсе, которым вы летите и о грузе, который вы готовы
          принять. По возможности приложите фото вашего билета или посадочного талона. Также укажите
          контактные данные, при помощи которых с вами смогут связаться.
        </Typography>
      </Box>
      <Formik
        initialValues={{
          flightInfo: {
            from: '',
            to: '',
            dateTime: '',
            flightNumber: '',
            ticketPhoto: '',
          },
          luggageInfo: {
            luggageDescription: '',
            maxWeight: '',
            ownerPrice: '',
          },
          contactInfo: {
            name: '',
            surname: '',
            phone: '',
            email: '',
          },
        }}
        onSubmit={async (values) => {
          const response = await axios.post('/api/take', values)
          const { id } = response.data
          localStorage.setItem('id', id)
          localStorage.setItem('name', values.contactInfo.name)
          localStorage.setItem('type', 'take')
          history.push('/')
        }}
        render={(renderProps) => <FormView {...renderProps} />}
      />
    </Box>
  )
}
