import { useMoralis } from "react-moralis"
import { Button, Heading } from "@chakra-ui/react"

export default function Connect() {
    const {authenticate, isAuthenticated, isAuthenticating, user, logout} = useMoralis()

    if (!isAuthenticated) {
        return (
          <div>
            <Button isLoading={isAuthenticating} onClick={() => authenticate({signingMessage: "Welcome"})}>Connect Wallet</Button>
          </div>
        );
      }
    
      return (
        <div>
          {/* <Heading size={'sm'}>Connected user: {user.get("username")}</Heading> */}
          <Button marginLeft={'10px'} onClick={() => logout()}>Logout</Button>
        </div>
      );
}