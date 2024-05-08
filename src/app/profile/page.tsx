// ClientComponent.js (or the name of your component)
"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "@/redux/Slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";

const ClientComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userData } = useSelector((state: RootState) => state.User);
  const [user, setUser] = useState("aditya kushwaha");

  useEffect(() => {
    dispatch(setUserData(user));
  }, [dispatch, user]); // Ensure dispatch and user are in the dependency array

  return <div>{userData}</div>;
};

export default ClientComponent;
