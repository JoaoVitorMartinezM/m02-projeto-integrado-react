import { useUserState } from '../../contexts/UserContext'

export const userIsAdministrator = () => {
  const user = useUserState()

  return user.isAdmin
}
