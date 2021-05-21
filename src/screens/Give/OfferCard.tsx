import React from 'react'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import { green, grey, blue } from '@material-ui/core/colors'
import FlightIcon from '@material-ui/icons/Flight'
import GradeIcon from '@material-ui/icons/Grade'
import PaymentIcon from '@material-ui/icons/Payment'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline'
import { OfferCardProps } from './types'

const useStyles = makeStyles({
  card: {
    width: 285,
    height: 175,
    padding: '16px',
  },
  cardContent: {
    padding: '0 0 0 0',
  },
})

export const OfferCard = ({ personalInfo, flightInfo, luggageInfo }: OfferCardProps) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Box fontSize={20} fontWeight={500}>
          {personalInfo.name}
        </Box>
        <Box py={6} display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" justifyContent="center" alignItems="center">
            <FlightIcon style={{ color: grey[600] }} />
            <Box pl={2} fontSize={14} fontWeight={500} display="flex" flexDirection="column">
              <span style={{ color: blue[400] }}>{flightInfo.flightNumber}</span>
              <span style={{ color: grey[600] }}>{flightInfo.dateTime}</span>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" fontSize={16}>
            <GradeIcon style={{ color: green[400], marginRight: '4px' }} />
            <span style={{ color: grey[600] }}>{personalInfo.rating.toPrecision(2)}</span>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" fontSize={20} fontWeight={500}>
          <Box display="flex" alignItems="center">
            <WorkOutlineIcon style={{ color: grey[600], marginRight: '4px' }} fontSize="large" />
            <span>{luggageInfo.weight} кг</span>
          </Box>
          <Box pl={6} display="flex" alignItems="center">
            <PaymentIcon style={{ color: grey[600], marginRight: '4px' }} fontSize="large" />
            <span>{luggageInfo.price} &#8381;</span>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
