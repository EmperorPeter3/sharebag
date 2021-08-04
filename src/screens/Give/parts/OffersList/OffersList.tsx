import React, { useState } from 'react'
import { Box, Grid, Drawer } from '@material-ui/core'
import { OfferCard } from './OfferCard'
import { OfferDrawer } from './OfferDrawer'
import { OffersListProps } from '../../types'

export const OffersList = ({ offers }: OffersListProps) => {
  const [drawer, setDrawer] = useState<boolean>(false)
  const [currentOfferId, setCurrentOfferId] = useState<number>(0)

  const onOfferClick = (id: number) => {
    setCurrentOfferId(id)
    setDrawer(true)
  }

  return (
    <Box pt={6}>
      <Grid container spacing={5}>
        {offers.map((offer, idx) => (
          <Grid key={idx} item>
            <OfferCard {...offer} onClick={onOfferClick} />
          </Grid>
        ))}
      </Grid>
      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
        {currentOfferId && <OfferDrawer id={currentOfferId} />}
      </Drawer>
    </Box>
  )
}
