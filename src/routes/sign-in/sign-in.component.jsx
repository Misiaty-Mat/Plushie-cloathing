import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import { auth, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
    useEffect(() => {
        const fetchUser = async () => {
            const response = await getRedirectResult(auth);
            if(response) {
                await createUserDocumentFromAuth(response.user)
            }
        }
        fetchUser()
    }, []
    )

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with google
            </button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn