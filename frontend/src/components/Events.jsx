import { useEffect, useState } from "react";
import AsideLeft from "./AsideLeft";
import MainUpper from "./MainUpper";
import Posts from "./Posts";
import axios from "../utils/axios.jsx";

const Events = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.post(
          "/allevents",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setPosts(res.data.events);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex">
      <AsideLeft />
      <main className="w-[60vw] ml-[16vw] flex flex-col items-center">
        {posts.length === 0 ? (
          <div className="w-full h-[100vh] font-extrabold text-3xl flex justify-center items-center text-center">
            Event will Come Soon{" "}
          </div>
        ) : (
          posts.map((post) => (
            <>
              <Posts
                img={post.author.profilePic}
                userid={post.author.username}
                year={post.author.year}
                post={post.event}
                postTime={post.createdAt}
                desc={post.description}
              />
              <div></div>
            </>
          ))
        )}
      </main>
    </div>
  );
};

export default Events;
