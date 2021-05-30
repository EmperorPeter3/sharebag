import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { Grid, Box, Drawer, Button } from '@material-ui/core'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'
import { TakeDrawer } from './parts/TakeDrawer'

type AboutProps = {
  onGiveClick: () => void
  onTakeClick: () => void
}

const About = ({ onGiveClick, onTakeClick }: AboutProps) => (
  <Box width="50%">
    <Grid container direction="column">
      <Box p={6}>
        <Grid container direction="column" spacing={4}>
          <Grid item sm={12} xs={12}>
            <Box textAlign="center" fontSize={120} fontWeight="bold" color="white">
              ShareBag
            </Box>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Box
              textAlign="center"
              letterSpacing={1}
              fontSize={24}
              fontWeight={300}
              color="rgba(255, 255, 255, 0.67)"
              mb={4}
            >
              Протяни сумку помощи!
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6} xs={6}>
            <Box display="flex" justifyContent="center">
              <Button size="large" variant="contained" color="primary" onClick={onTakeClick}>
                Взять багаж
                <ArrowDownward style={{ marginLeft: '8px' }} />
              </Button>
            </Box>
          </Grid>
          <Grid item sm={6} xs={6}>
            <Box display="flex" justifyContent="center">
              <Button size="large" variant="contained" color="secondary" onClick={onGiveClick}>
                Отдать багаж
                <ArrowUpward style={{ marginLeft: '8px' }} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  </Box>
)

export const Home = (props: RouteComponentProps) => {
  const [takeDrawerState, setTakeDrawerState] = useState(false)

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" justifyContent="center">
      <About
        onGiveClick={() => {
          props.history.push('/give')
        }}
        onTakeClick={() => {
          setTakeDrawerState(true)
        }}
      />
      <Drawer anchor="right" open={takeDrawerState} onClose={() => setTakeDrawerState(false)}>
        <TakeDrawer />
      </Drawer>
    </Box>
  )
}
