import * as React from 'react'
import MUISelect from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

type Option = {
  id: string
  name: string
}

export const Select = ({ options, placeholder, ...props }: any) => (
  <MUISelect {...props}>
    {options.map(({ id, name }: Option) => (
      <MenuItem key={id} value={id}>
        {name}
      </MenuItem>
    ))}
  </MUISelect>
)
