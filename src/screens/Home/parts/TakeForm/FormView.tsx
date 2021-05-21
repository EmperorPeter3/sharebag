import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors'
import { FlightInfo, LuggageInfo, ContactInfo } from './sections/index'
import { FormViewProps } from './types'

const SubmitButton = withStyles((theme) => ({
  root: {
    height: '44px',
    width: '226px',
    textAlign: 'center',
    borderRadius: '4px',
    color: theme.palette.getContrastText(yellow[400]),
    backgroundColor: yellow[400],
    '&:hover': {
      backgroundColor: yellow[600],
    },
  },
  label: {
    letterSpacing: 1.25,
    fontWeight: 500,
  },
}))(Button)

export const FormView = ({
  handleChange,
  values: { flightInfo, luggageInfo, contactInfo },
  handleSubmit,
  setFieldValue,
}: FormViewProps) => (
  <form onSubmit={handleSubmit}>
    <FlightInfo handleChange={handleChange} setFieldValue={setFieldValue} {...flightInfo} />
    <LuggageInfo handleChange={handleChange} {...luggageInfo} />
    <ContactInfo handleChange={handleChange} {...contactInfo} />
    <Box display="flex" justifyContent="flex-end" px={8}>
      <SubmitButton type="submit">Найти</SubmitButton>
    </Box>
  </form>
)
