import React from 'react'
import { makeStyles, Box, Card } from '@material-ui/core'
import { grey, blue } from '@material-ui/core/colors'
import FlightIcon from '@material-ui/icons/Flight'
import PaymentIcon from '@material-ui/icons/Payment'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline'
import { OfferCardProps } from '../../types'

const useStyles = makeStyles({
  card: {
    cursor: 'pointer',
    width: 285,
    padding: '16px',
  },
})

export const OfferCard = ({
  id,
  arrivalStation,
  depatrureStation,
  bagWeight,
  date,
  flightNumber,
  bagPrice,
  onClick,
}: OfferCardProps) => {
  const classes = useStyles()
  return (
    <Card className={classes.card} onClick={() => onClick(id)}>
      <Box display="flex" alignItems="center">
        <Box flexBasis="20%">Из:&nbsp;</Box>
        <Box fontWeight={500}>{depatrureStation}</Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box flexBasis="20%">В:&nbsp;</Box>
        <Box fontWeight={500}>{arrivalStation}</Box>
      </Box>
      <Box py={4} display="flex" alignItems="center">
        <FlightIcon style={{ color: grey[600] }} />
        <Box pl={2} fontSize={14} fontWeight={500} display="flex" flexDirection="column">
          <span style={{ color: blue[400] }}>{flightNumber}</span>
          <span style={{ color: grey[600] }}>{date}</span>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" fontSize={20} fontWeight={500}>
        <Box display="flex" alignItems="center">
          <WorkOutlineIcon style={{ color: grey[600], marginRight: '4px' }} fontSize="large" />
          <span>{bagWeight} кг</span>
        </Box>
        <Box pl={6} display="flex" alignItems="center">
          <PaymentIcon style={{ color: grey[600], marginRight: '4px' }} fontSize="large" />
          <span>{bagPrice} &#8381;</span>
        </Box>
      </Box>
    </Card>
  )
}
