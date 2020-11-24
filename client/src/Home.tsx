import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import axios from 'axios'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { yellow, purple } from '@material-ui/core/colors'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Drawer from '@material-ui/core/Drawer'
import { TakeForm } from './TakeForm'

type AboutProps = {
  onGiveClick: () => void
  onTakeClick: () => void
}

const AboutContainer = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  bottom: 0;
  left: 0;
  padding: 16px 0 16px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const PrimaryButton = withStyles(theme => ({
  root: {
    height: '64px',
    width: '244px',
    textAlign: 'center',
    borderRadius: '35px',
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

export const SecondaryButton = withStyles(theme => ({
  root: {
    height: '64px',
    width: '244px',
    textAlign: 'center',
    borderRadius: '35px',
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

const About = ({ onGiveClick, onTakeClick }: AboutProps) => (
  <AboutContainer>
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
              mb={16}
              textAlign="center"
              letterSpacing={1}
              fontSize={24}
              fontWeight={300}
              color="rgba(255, 255, 255, 0.67)"
            >
              Протяни сумку помощи!
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={6}>
            <Box display="flex" justifyContent="center">
              <PrimaryButton onClick={onTakeClick}>
                Взять багаж
                <ArrowDownwardIcon style={{ marginLeft: '8px' }} />
              </PrimaryButton>
            </Box>
          </Grid>
          <Grid item sm={6} xs={6}>
            <Box display="flex" justifyContent="center">
              <SecondaryButton onClick={onGiveClick}>
                Отдать багаж
                <ArrowUpwardIcon style={{ marginLeft: '8px' }} />
              </SecondaryButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  </AboutContainer>
)

type AuthorizedViewProps = {
  id: string
  name: string
}

const onCancel = async (id: string) => {
  await axios.post('/api/cancel', { id })
  localStorage.clear()
  window.location.reload()
}

const Give = ({ id, name }: AuthorizedViewProps) => (
  <Container>
    <Paper>
      Привет, {name}! Мы только что типа сделали запрос на сервер и не нашли никого кто бы взял
      багаж
    </Paper>
    <Button variant="contained" color="secondary" onClick={() => onCancel(id)}>
      Отказаться, больше не хочу сдавать багаж
    </Button>
  </Container>
)

const Take = ({ id, name }: AuthorizedViewProps) => (
  <Container>
    <Paper>
      Привет, {name}! Мы только что типа сделали запрос на сервер и не нашли никого кто готов
      платить
    </Paper>
    <Button variant="contained" color="secondary" onClick={() => onCancel(id)}>
      Отказаться, больше не хочу брать багаж
    </Button>
  </Container>
)

export const Home = (routeProps: RouteComponentProps) => {
  const id = localStorage.getItem('id')
  const name = localStorage.getItem('name')
  const type = localStorage.getItem('type')

  const [takeDrawerState, setTakeDrawerState] = useState(false)

  if (!id || !name) {
    return (
      <>
        <About
          onGiveClick={() => {
            routeProps.history.push('/give')
          }}
          onTakeClick={() => {
            setTakeDrawerState(true)
          }}
        />
        <Drawer anchor="right" open={takeDrawerState} onClose={() => setTakeDrawerState(false)}>
          <TakeForm {...routeProps} />
        </Drawer>
      </>
    )
  }
  if (type === 'give') {
    return <Give id={id} name={name} />
  }

  return <Take id={id} name={name} />
}
