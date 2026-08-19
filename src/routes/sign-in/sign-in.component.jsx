import { signinWithGooglePopup } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
            const respons = await signinWithGooglePopup(); 
            console.log(respons)
    }
    return (
    <div>
        <h1>Sign in page</h1>
        <button onClick={logGoogleUser}>
            Sign in with google popup
        </button>
    </div>
    )
}

export default SignIn