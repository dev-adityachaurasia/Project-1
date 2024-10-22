import { useEffect, useState } from "react";
import AsideLeft from "./AsideLeft";
import MainUpper from "./MainUpper";
import Posts from "./Posts";
import axios from "../utils/axios.jsx";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.post(
          "/allpost",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setPosts(res.data.allPost);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex">
      <AsideLeft />
      <main className="w-[60vw] ml-[16vw] mt-10 flex flex-col items-center">
      
        {posts.map((post) => (
          <Posts
            key={post._id}
            id={post._id}
            img={post.author.profilePic}
            userid={post.author.username}
            post={post.post}
            postTime={post.createdAt}
            year={post.author.year}
            desc={post.caption}
            like={post.likes.length > 0 ? post.likes.length : 0}
            comment={
              post.comment.length ? `View all ${post.comment.length}` : "No"
            }
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
