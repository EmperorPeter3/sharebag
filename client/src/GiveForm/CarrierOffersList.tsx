import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { OfferCard } from './OfferCard'
import { CarrierOffersListProps, OfferCardProps } from './types'
import { OFFERS_LIST } from '../fakeData'

export const CarrierOffersList = ({ from, to, dateTime, weight }: CarrierOffersListProps) => {
  const [offersList, setOffersList] = useState<OfferCardProps[]>([])
  useEffect(() => {
    console.log('updated')
    // request for a data with incoming props (from, to, dateTime, weight)
    setOffersList(OFFERS_LIST)
  })

  return (
    <Box pt={12}>
      <Grid container spacing={10}>
        {offersList.map((offerData, idx) => (
          <Grid key={idx} item>
            <OfferCard {...offerData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
