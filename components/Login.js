import styles from "../styles/Login.module.css"
import Image from "next/image" // helps reduce loading time
import logo from "./Images/Logo-auticon.png"
import {useMoralis} from "react-moralis"
import { useState } from 'react'
import {HStack, VStack, Button } from '@chakra-ui/react'


// Continue here: https://www.youtube.com/watch?v=XmezdzLb154

function Login() {
    const {authenticate, authError, signup, login} = useMoralis()

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function handleEmail(event) {
        setEmail(event.target.value)
    }
    function handlePassword(event) {
        setPassword(event.target.value)
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.login_card}>
                <Image src={logo} width={100} height={100} layout='fixed' />
                <div className={styles.sign_in_container}>
                    { authError && (
                        <p className={styles.error}>
                            {authError.name}
                            {authError.message}
                        </p>)}
                    <VStack>
                        <input type="email" id="email" placeholder="email" onChange={handleEmail}></input>
                        <input type="password" id="password" placeholder="password" onChange={handlePassword}></input>
                     
                     <HStack>
                     <Button id="signup" onClick={() => signup(email, password, email)}>Sign up</Button>
                     <Button id="login" onClick={() => login(email, password)}>Login</Button>
                     </HStack>
                     </VStack>
                    {/* <button onClick={authenticate}>Login with Metamask</button> */}
                </div>
            </div>
        </div>
    )
}

export default Login