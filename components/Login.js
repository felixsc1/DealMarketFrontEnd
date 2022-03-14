import styles from "../styles/Login.module.css"
import Image from "next/image" // helps reduce loading time
import logo from "./Images/Logo-auticon.png"
import {useMoralis} from "react-moralis"

// Continue here: https://www.youtube.com/watch?v=XmezdzLb154

function Login() {
    const {authenticate, authError} = useMoralis()
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
                    <button onClick={authenticate}>Login with Metamask</button>
                </div>
            </div>
        </div>
    )
}

export default Login