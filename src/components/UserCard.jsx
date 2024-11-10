import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{about}</p>
          <div className="card-actions justify-between">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-primary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
