import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://aqueous-sierra-90066.herokuapp.com/admin/${email}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                });
        }
    }, [user]);
    return [admin, adminLoading];
};

export default useAdmin;