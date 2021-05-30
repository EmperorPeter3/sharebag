import React from 'react'
import { Box } from '@material-ui/core'

export const DrawerHeader = ({ children }: { children: React.ReactChild }) => (
  <Box
    my={2}
    textAlign="center"
    fontWeight={500}
    color="grey.500"
    style={{ textTransform: 'uppercase' }}
  >
    {children}
  </Box>
)
