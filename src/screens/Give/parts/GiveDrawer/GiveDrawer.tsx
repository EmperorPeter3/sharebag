import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { purple, grey } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography'
import { GiveDrawerProps } from '../../types'
import { FlightInfo, LuggageInfo, ContactInfo } from './sections/index'

const SubmitButton = withStyles((theme) => ({
  root: {
    height: '44px',
    width: '226px',
    textAlign: 'center',
    borderRadius: '4px',
    color: theme.palette.getContrastText(purple[400]),
    backgroundColor: purple[400],
    '&:hover': {
      backgroundColor: purple[600],
    },
  },
  label: {
    letterSpacing: 1.25,
    fontWeight: 500,
  },
}))(Button)

export const GiveDrawer = ({ onSubmit, ...props }: GiveDrawerProps) => (
  <Box width={540}>
    <form onSubmit={onSubmit}>
      <Box bgcolor={purple[400]} color="#fff" pt={2} pl={8} pb={2}>
        Заявка на перевозку груза
      </Box>
      <Box></Box>
      <Box px={8} pt={6} pb={10} color={grey[500]}>
        <Typography>
          Пожалуйста, заполните данные о грузе и рейсе, которым хотите его отправить. По возможности
          приложите фото груза, так перевозчики откликнутся охотнее. Также укажите контактные
          данные, при помощи которых с вами свяжется перевозчик.
        </Typography>
      </Box>
      <FlightInfo {...props} />
      <LuggageInfo {...props} />
      <ContactInfo {...props} />
      <Box display="flex" justifyContent="flex-end" px={8}>
        <SubmitButton type="submit">Разместить заявку</SubmitButton>
      </Box>
    </form>
  </Box>
)
