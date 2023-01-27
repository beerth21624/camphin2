import React, { useEffect, useState } from "react";
import useSession from "../hooks/useSession";
import { useNavigate } from "react-router-dom";

export default function LayoutWithGuard({ children }) {
    const { user, loading } = useSession();
    const [Show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (user) {
                setShow(true);
            }
        }
    }, [loading]);

    return !loading ? (
        <>
            {Show ? (
                <>{children}</>
            ) : (
                <div className="tw-flex tw-flex-col">
                    <div>คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>
                    <button onClick={()=>navigate("/login")} className="btn btn-primary">ไปหน้า login</button>
                </div>
            )}
        </>
    ) : (
        <div>กำลังโหลด...</div>
    );
}
