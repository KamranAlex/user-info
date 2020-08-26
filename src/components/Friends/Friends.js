import React from "react";
import "./Friends.css";
import FriendList from "../FriendList/FriendList";

const Friends = (props) => {
  const addedFriend = props.getFriend;
  let totalIncome = 0;
  for (let i = 0; i < addedFriend.length; i++) {
    const element = addedFriend[i];
    totalIncome = totalIncome + element.income;
  }
  return (
    <div className='my-friends'>
      <h1>
        Total Friends:{" "}
        <span className='total-friends'>{addedFriend.length}</span>{" "}
      </h1>
      <h4>
        Total income: <span className='income'> ${totalIncome}</span>{" "}
      </h4>
      {addedFriend.map((singleFriend) => (
        <FriendList
          singleFriend={singleFriend}
          key={singleFriend.id}
        ></FriendList>
      ))}
    </div>
  );
};

export default Friends;
