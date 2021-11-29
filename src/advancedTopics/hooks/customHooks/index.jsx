import React from "react";
import useFriendStatus from "./hooks/useFriendStatus";
import { UsersMock } from "./mocks";

const ProfileUser = ({ index, user }) => {
  function FriendStatus(id) {
    const isOnline = useFriendStatus(id);

    if (isOnline === null) {
      return "Loading...";
    }
    return isOnline ? "Online" : "Offline";
  }

  return (
    <div key={index} className="display-flex-row align-items-center">
      <span>Online: {FriendStatus(user.id)}</span>
      <h3 className="ml-10">{user.name}</h3>
      <p className="ml-10">{user.age}</p>
    </div>
  );
};

const CustomHooks = () => {
  return (
    <div>
      {UsersMock.map((user, index) => (
        <ProfileUser key={index} user={user} />
      ))}
    </div>
  );
};

export default CustomHooks;
