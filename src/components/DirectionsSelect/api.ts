import { httpClient } from '../../httpClient'
import { YandexDirection, Direction } from './types'

export const getDirections = async ({ search }: { search: string }): Promise<Direction[]> =>
  httpClient
    .get('direction/getDirections', { params: { search } })
    .then(({ data }: { data: YandexDirection[] }) =>
      data.reduce(
        (acc: Direction[], direction: YandexDirection) => [
          ...acc,
          ...direction.stations.map(({ stationCode, stationTitle }) => ({
            id: stationCode,
            name: `${direction.cityTitle} - ${stationTitle}`,
          })),
        ],
        [],
      ),
    )
