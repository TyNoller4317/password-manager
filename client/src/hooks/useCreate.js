import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useCreate = () => {
  const { user } = useAuthContext();

  const create_passwords = async (destination, username, password) => {
    const response = await fetch("/api/passwords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.accessToken,
      },
      body: JSON.stringify({
        destination,
        username,
        password,
      }),
    });

    const json = response.json();
  };

  return { create_passwords };
};
