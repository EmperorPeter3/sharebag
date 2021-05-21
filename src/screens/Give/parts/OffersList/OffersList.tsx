import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { OfferCard } from './OfferCard'
import { OffersListProps } from '../../types'

export const OffersList = ({ offers }: OffersListProps) => (
  <Box pt={6}>
    <Grid container spacing={5}>
      {offers.map((offer, idx) => (
        <Grid key={idx} item>
          <OfferCard {...offer} />
        </Grid>
      ))}
    </Grid>
  </Box>
)
