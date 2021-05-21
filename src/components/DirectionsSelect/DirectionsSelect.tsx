import React, { useState, useEffect } from 'react'
import { TextField, CircularProgress, Box } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { useDebounce } from '../../hooks'
import { getDirections } from './api'
import { DirectionsSelectProps, Direction } from './types'

export const DirectionsSelect = ({ required, label, value, onChange }: DirectionsSelectProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [options, setOptions] = useState<Direction[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const debouncedSearch = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearch) {
      setIsLoading(true)
      getDirections({ search: debouncedSearch }).then((results) => {
        setIsLoading(false)
        setOptions(results)
      })
    } else {
      setOptions([])
    }
  }, [debouncedSearch])

  const onInput = (input: string) => {
    setSearchTerm(input)
  }

  return (
    <Autocomplete
      loading={isLoading}
      options={options}
      value={value}
      onChange={onChange}
      getOptionSelected={(option: Direction, value: Direction) => option.name === value.name}
      getOptionLabel={(option: Direction) => option.name || ''}
      onInputChange={(event, inputValue) => {
        onInput(inputValue)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          required={required}
          label={label}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(option) => <Box>{option.name}</Box>}
    />
  )
}
