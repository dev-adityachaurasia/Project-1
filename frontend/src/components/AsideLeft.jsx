import home from "../assets/home/home.svg";
import SideList from "./ui/SideList";
import search from "../assets/home/search.svg";
import { useNavigate } from "react-router-dom";
import profile from "../assets/home/Profile.svg";
import logout from "../assets/home/Logout.svg";
import setting from "../assets/home/Setting.svg";
import upload from "../assets/home/Upload.svg";
import result from "../assets/home/Result.svg";
import axios from "axios";
import question from "../assets/home/QPaper.svg";
import events from "../assets/home/Events.svg";

const AsideLeft = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      let res = await axios.get("http://localhost:8000/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        localStorage.setItem("token", "");
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const upLoad = async () => {
    navigate("/upload");
  };
  const Result = async () => {
    navigate("/results");
  };
  const Qustion = async () => {
    navigate("/question");
  };
  const Events = async () => {
    navigate("/events");
  };
  return (
    <div className="h-[100vh] fixed border-r border-solid border-black w-[16vw] flex flex-col items-left p-6 ">
      <div className="h-[10%] mb-3 items-start flex">
        <h1 className="font-bold"> </h1>
      </div>
      <div className="h-[90%]">
        <ul className="h-full flex flex-col gap-4">
          <SideList
            img={home}
            onClick={() => {
              navigate("/home");
            }}
            src=""
            name="Home"
          />
          <SideList img={upload} src="" onClick={upLoad} name="Upload" />
          <SideList img={events} src="" onClick={Events} name="Events" />

          <SideList img={result} onClick={Result} src="" name="Results" />
          <SideList img={question} onClick={Qustion}  src="" name="Q Papers" />

          <SideList img={logout} onClick={Logout} name="Logout" />
        </ul>
      </div>
    </div>
  );
};

export default AsideLeft;
