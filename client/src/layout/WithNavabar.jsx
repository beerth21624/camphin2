import React from "react";
import Headbar from "../components/Headbar";

export default function WithNavabar({ children }) {
    return (
        <>
            <Headbar />
            {children}
        </>
    );
}
