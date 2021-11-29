import { useEffect, useState } from "react";
import { UsersMock } from "../mocks";

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status);
    }

    useEffect(() => {
        const user = UsersMock.find((user) => user.id === friendID)
        handleStatusChange(user.isOnline);
    }, [friendID]);

    return isOnline;
}

export default useFriendStatus;
