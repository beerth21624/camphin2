import React, { useEffect } from "react";
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebaseApp from "../../configs/firebaseApp";
import { useNavigate } from "react-router-dom";
import useSession from "../../hooks/useSession";

export default function Login() {
    const { user,loading } = useSession();
    console.log("user", user);
    const navigate = useNavigate();
    const onSumit = (e) => {
        e.preventDefault();
        console.log("Login");
        const provider = new FacebookAuthProvider();
        const auth = getAuth(firebaseApp);
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate("/");
            })
            .catch((error) => {
                // error hadler
                console.log("error");
            });
    };

    useEffect(() => {
      if(!loading) {
        if (user) {
            navigate("/");
        }
      }
    }, [loading])
    

    return (
        <form
            onSubmit={onSumit}
            className="tw-fixed tw-top-0 tw-bottom-0 tw-right-0 tw-left-0 tw-flex tw-justify-center tw-items-center"
        >
            <button className="btn btn-primary">Login with Facebook</button>
        </form>
    );
}
