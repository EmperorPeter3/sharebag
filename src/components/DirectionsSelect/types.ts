export type Direction = {
  id: string
  name: string
}

export type DirectionsSelectProps = {
  value: Direction | null
  onChange: (event: any, value: Direction | null) => void
  label: string
  required: boolean
}

export type YandexStation = {
  stationCode: string
  stationTitle: string
}

export type YandexDirection = {
  cityCode: string
  cityTitle: string
  stations: YandexStation[]
}
