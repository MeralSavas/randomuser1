import axios from "axios";
import { useEffect, useState } from "react";
import Phone from "../assets/phone.svg";
import Dob from "../assets/dob.svg";
import Location from "../assets/location.svg";
import Mail from "../assets/email.svg";
import Map from "../assets/map.svg";
// import "./Main.css";

const Main = () => {
  const [user, setUser] = useState("");
  //   const { name, email, dob, picture } = data;

  const getUser = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    setUser(data.results[0]);
  };
  useEffect(() => {
    //?componentDidMount
    getUser();
  }, []);
  const { title, location, name, email, phone, picture, dob, registered } =
    user;
  const buttonHandle = () => {
    getUser();
  };
  return (
    <>
      <div className="container ">
        <div className="img">
          <img src={picture?.large} alt="" />
          <p>
            {name?.title} {name?.first} {name?.last}
          </p>
        </div>
        <div>
          <img style={{ width: "30px" }} src={Phone} alt="" />
          <p>{phone}</p>
        </div>
        <div>
          <img style={{ width: "30px" }} src={Mail} alt="" />
          <p>{email}</p>
        </div>
        <div>
          <img style={{ width: "30px" }} src={Location} alt="" />
          <p>{location?.city}</p>
        </div>
        <div>
          <img style={{ width: "30px" }} src={Dob} alt="" />
          <p>{new Date(dob?.date).toLocaleDateString}</p>
        </div>
        <div>
          <img style={{ width: "30px" }} src={Map} alt="" />
          <p>{new Date(registered?.date).toLocaleDateString()}</p>
        </div>
      </div>
      <div>
        <button
          className="btn btn-primary d-flex justify- content-center m-3"
          onClick={buttonHandle}
        >
          Random User
        </button>
      </div>
    </>
  );
};

export default Main;
