import React, { useContext, useState } from "react";
import DailyUpdate from "./ui/DailyUpdate";
import userContext from "../context/Context";

const MainUpper = () => {
  const { users } = useContext(userContext);
  const [user, setUser] = useState(users);
  console.log(users);
  try {
    getUser = async () => {
      let res = await axios.post(
        "/user",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      getUser();
    };
  } catch (error) {}
  return (
    <div className="my-6 w-full  overflow-x-auto ">
      <ul className="flex gap-6 overflow-x-auto scroll m-auto w-[60%]">
        <DailyUpdate
          img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          name="aditya "
        />
      </ul>
    </div>
  );
};

export default MainUpper;
