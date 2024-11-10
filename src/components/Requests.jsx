import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (error) {}
  };

  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) return;
  if (requests.length === 0) return <h1>No Rerquests Found</h1>;
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-4xl">Connection Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;

        return (
          <div
            key={_id}
            className="flex justify-between items-center m-4 p-4 border rounded-lg bg-base-300 w-2/3 mx-auto"
          >
            <div>
              <img className="w-20 h-20 rounded-full" src={photoUrl} alt="" />
            </div>
            <div>
              <h2 className="font-bold">{firstName + " " + lastName}</h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div>
              <button className="btn btn-primary mx-2">Reject</button>
              <button className="btn btn-secondary mx-2">Accept</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
