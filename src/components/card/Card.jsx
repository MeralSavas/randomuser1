import axios from "axios";
import { useEffect, useState } from "react";
// import Location from "../../assets/location.svg";
// import Email from "../assets/email.svg";
// import Phone from "../assets/phone.svg";

import "../card/Card.css";

const Card = () => {
  const [user, setUser] = useState([]);
 //Api
  const url = "https://randomuser.me/api/";
  const getUser = async () => {
    const { data } = await axios(url);
    setUser(data.results[0]);
  };
  console.log(user);

  // getUser();
  useEffect(() => {
    getUser();
  }, []);

  // const { title, location, name, email, phone, picture, dob, registered } = user;

  const buttonHandle = () => {
    getUser();
  };

  return (
    <>
      <div className="container">
        <div id="card1" className="card " style={{ width: "30rem" }}>
          <div className="card-body">
            <img
              src={user?.picture?.large}
              className="card-img-top rounded-circle"
              alt="img"
              id="photo"
            />
            <h4>
              {user?.name?.title} {user?.name?.first} {user?.name?.last}
            </h4>
          </div>

          <p>
            <i className="fa-solid fa-envelope"></i>
            {user?.email}
          </p>

          <p>
            <i class="fa-solid fa-location-dot"></i>
            {user?.location?.city}
          </p>

          <p>
            <i className="fa-solid fa-phone"></i>
            {user?.phone}
          </p>

          <p>
            <i class="fa-solid fa-calendar-days me-3"></i>
            Age: {user?.dob?.age}
          </p>
          <p>
            <i class="fa-solid fa-file-contract me-3"></i>
            Register Date:
            {new Date(user?.registered?.date).toLocaleDateString()}
          </p>
        </div>
        <div className="btn1">
          <button className="btn" onClick={buttonHandle}>
            Change User
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
