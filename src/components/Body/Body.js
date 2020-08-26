import React from "react";
import "./Body.css";
import fakeUser from "../../fakeData/FakeUsers";
import Users from "../Users/Users";
import { useState } from "react";
import Friends from "../Friends/Friends";

const Body = () => {
  const users15 = fakeUser;
  const [user, setUser] = useState(users15);
  const [friends, setFriends] = useState([]);
  const handleAddfriend = (myFriend) => {
    const newFriend = [...friends, myFriend];
    setFriends(newFriend);
  };

  return (
    <div className='body-container'>
      <div className='people'>
        {user.map((user) => (
          <Users
            addFriend={handleAddfriend}
            key={user.id}
            getUser={user}
          ></Users>
        ))}
      </div>
      <div className='friends'>
        <Friends getFriend={friends}></Friends>
      </div>
    </div>
  );
};

export default Body;
