import React from "react";
import "./Friendlist.css";

const FriendList = (props) => {
  const newSingleFriend = props.singleFriend;
  const { name, country } = newSingleFriend;
  return (
    <div className='single-friend'>
      <img src={newSingleFriend.picture.thumbnail} alt='' />
      <div className='single-details'>
        <p className='short-Name'>{name}</p>

        <p className='country-name'>{country}</p>
      </div>
    </div>
  );
};

export default FriendList;
