import React from "react";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../configs/firebaseApp";

const Headbar = () => {
    const navigate = useNavigate();

    function changePage(page) {
        navigate(page);
    }

    const logOut = async () => {
        const auth = getAuth(firebaseApp);
        signOut(auth).then(() => {
            window.location.reload();
          }).catch((error) => {
            // An error happened.
          });
    };
    return (
        <div className="headbar-container d-flex flex-column pt-5 gap-3">
            <div className="d-flex">
                <h1 className="m-auto logo">CAMPFIN</h1>
            </div>
            <div className="w-100 d-flex justify-content-center">
                <div className="d-flex gap-5">
                    <p onClick={() => changePage("/")} className="menu">
                        HOME
                    </p>
                    <p onClick={() => changePage("/trip")} className="menu">
                        TRIP
                    </p>
                    <p className="menu">COMMUNITY</p>
                    <p className="menu">ABOUT US</p>
                    <p className="menu">SHOP</p>
                    <p onClick={() => logOut()} className="menu">
                        LOGOUT
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Headbar;
