import { useEffect, useState } from "react";
import AsideLeft from "./AsideLeft";
import axios from "../utils/axios.jsx";

const Papers = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.post(
          "/getpapers",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setPosts(res.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <AsideLeft></AsideLeft>
      <main className="w-[60vw] m-auto flex flex-col justify-center items-center gap-2">
        {posts.length === 0 ? (
          <div className="w-full h-[100vh] font-extrabold text-3xl flex justify-center items-center text-center">
            Notinhg is Avilable Now{" "}
          </div>
        ) : (
          posts.map((post) => (
            <div className="w-full p-4">
              <div className="bg-white shadow-md rounded-lg p-4 m-2 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  {post.branch} Branch Sem {post.sem} Result
                </p>
                <div className="mt-2">
                  <p className="text-gray-600">
                    View Result:{" "}
                    <a
                      href={post.result}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline focus:outline-none"
                    >
                      Result
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Papers;
