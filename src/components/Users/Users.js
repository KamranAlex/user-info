import React from "react";
import "./Users.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Users = (props) => {
  const userInfo = props.getUser;
  const { name, age, job, country, phone, email, income } = userInfo;
  return (
    <div className='single-user'>
      <div className='user-img'>
        <img src={userInfo.picture.large} alt='' />
      </div>
      <div className='user-details'>
        <div className='top-details'>
          <p className='name'>Name: {name}</p>
          <p className='age'>
            <small>Age: {age}</small>
          </p>
          <p className='country'>Country: {country}</p>
        </div>
        <div className='other-details'>
          <div className='left-details'>
            <p className='job'>Job: {job}</p>
            <p className='income'>Income: ${income}</p>
          </div>
          <div className='right-details'>
            <p className='phone'>Phone: {phone}</p>
            <p className='email'>Email: {email}</p>
          </div>
        </div>
        <button onClick={() => props.addFriend(props.getUser)}>
          <FontAwesomeIcon icon={faUserPlus} /> Add Friend
        </button>
      </div>
    </div>
  );
};

export default Users;
