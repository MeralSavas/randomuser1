import axios from "axios";
import { useEffect, useState } from "react";
import "../card/Card.css";

// import Phone from "../../assets/phone.svg";

const Card = () => {
  const [user, setUser] = useState([]);

  const url = "https://randomuser.me/api/";
  const getUser = async () => {
    const { data } = await axios.get(url);
    setUser(data.results[0]);
  };
  console.log(user);

  useEffect(() => {
    getUser();
  }, []);

  const { title, location, name, email, phone, picture, dob, registered } =
    user;

  return (
    <>
      <div className="container">
        <div className="card " style={{ width: "20rem" }}>
          <img
            src={user.picture?.large}
            className="card-img-top rounded-circle"
            alt="img"
            id="photo"
          />
          <div className="card-body">
            <h5 className="card-title fs-6">
              {user.name?.title} {user.name?.first} {user.name?.last}
            </h5>
          </div>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">{user.email}</li>
            <li className="list-group-item">{user.location?.city}</li>
            <li className="list-group-item">{user.phone}</li>
            <li className="list-group-item">{user.dob?.age}</li>
            <li className="list-group-item">
              {new Date(user.registered?.date).toLocaleDateString()}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
