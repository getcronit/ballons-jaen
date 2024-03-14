import {useAuth} from '@atsnek/jaen'
import {Button, ButtonProps} from '@chakra-ui/react'

export interface NavAuthButtonProps extends ButtonProps {}

export const NavAuthButton: React.FC<NavAuthButtonProps> = props => {
  const {signinRedirect} = useAuth()

  return (
    <Button variant="link" onClick={() => signinRedirect()} {...props}>
      Anmelden
    </Button>
  )
}
