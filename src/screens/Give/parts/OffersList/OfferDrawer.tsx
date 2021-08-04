import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { getOfferInfo } from '../../api'

export const OfferDrawer = ({ id }: { id: number }) => {
  const [offer, setOffer] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOfferInfo(id)
      setOffer(data)
    }
    fetchData()
  }, [id])

  console.log(offer)

  return (
    <Box width={570}>
      <Box bgcolor="secondary.main" color="black" py={2} pl={4}>
        Соглашение о сделке
      </Box>
      <Box my={1} mx={4} color="grey.500">
        <Typography>
          Пожалуйста, заполните это поле с описанием шо вообще надо делать я не знаю
        </Typography>
      </Box>
    </Box>
  )
}
