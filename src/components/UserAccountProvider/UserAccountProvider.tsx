import * as React from 'react'
import { Passenger } from '../../screens/Home/types'
import { getUserAccount } from '../api'

type UserAccountProviderState = {
  user: Passenger | null
}

type UserAccountProviderProps = {
  children: React.ReactNode
}

export const UserAccountContext = React.createContext<UserAccountProviderState>({
  user: null,
})

export class UserAccountProvider extends React.Component<
  UserAccountProviderProps,
  UserAccountProviderState
> {
  state = {
    user: null,
  }

  async componentDidMount() {
    const user = await getUserAccount()
    this.setState({ user })
  }

  render() {
    const { children } = this.props

    return <UserAccountContext.Provider value={this.state}>{children}</UserAccountContext.Provider>
  }
}
