import axios from "../../utils/axios";
const PostImage = ({ post, id }) => {
  const likePost = async () => {
    try {
      let res = await axios.post(
        `/like/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data) {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div
      className="mt-2 w-full h-[500px] relative flex justify-center bg-black border border-solid border-gray-400"
      onDoubleClick={likePost}
    >
      <img src={post} className="object-fill" alt="Post" />
    </div>
  );
};

export default PostImage;
