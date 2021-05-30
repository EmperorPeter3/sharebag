import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { FlightInfo, LuggageInfo } from './sections'
import { GiveDrawerProps } from '../../types'

export const GiveDrawer = ({ onSubmit, ...props }: GiveDrawerProps) => (
  <Box width={540}>
    <form onSubmit={onSubmit}>
      <Box bgcolor="secondary.main" color="grey.700" py={2} pl={4}>
        Заявка на перевозку груза
      </Box>
      <Box></Box>
      <Box my={1} mx={4} color="grey.500">
        <Typography>
          Пожалуйста, заполните данные о грузе и рейсе, которым хотите его отправить. По возможности
          приложите фото груза, так перевозчики откликнутся охотнее. Также укажите контактные
          данные, при помощи которых с вами свяжется перевозчик.
        </Typography>
      </Box>
      <FlightInfo {...props} />
      <LuggageInfo {...props} />
      <Box display="flex" justifyContent="flex-end" mt={4} mr={4}>
        <Button type="submit" color="secondary" variant="contained" size="large">
          Разместить заявку
        </Button>
      </Box>
    </form>
  </Box>
)
