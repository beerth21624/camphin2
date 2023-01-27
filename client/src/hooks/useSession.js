import { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebaseApp from "../configs/firebaseApp";

export default function useSession() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const auth = getAuth(firebaseApp);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            }else {
                setUser(null);
                setLoading(false);
            }
        });
    }, []);

    return { user,loading };
}
