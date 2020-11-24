import React from 'react'
import { RouteComponentProps } from 'react-router'
import axios from 'axios'
import { Formik } from 'formik'
import Box from '@material-ui/core/Box'
import { FormView } from './FormView'

export const Give = (routeProps: RouteComponentProps) => (
  <Box px={30} py={10}>
    <Box pb={12} fontSize={40} fontWeight={300}>
      Предложения перевозчиков
    </Box>
    <Formik
      initialValues={{
        flightInfo: {
          from: '',
          to: '',
          dateTime: '',
          flightNumber: '',
        },
        luggageInfo: {
          luggageDescription: '',
          weight: '',
          luggagePhoto: '',
        },
        contactInfo: {
          name: '',
          surname: '',
          phone: '',
          email: '',
        },
      }}
      onSubmit={async values => {
        const response = await axios.post('/api/give', values)
        const { id } = response.data
        localStorage.setItem('id', id)
        localStorage.setItem('name', values.contactInfo.name)
        localStorage.setItem('type', 'give')
        routeProps.history.push('/')
      }}
      render={renderProps => <FormView {...renderProps} />}
    />
  </Box>
)
