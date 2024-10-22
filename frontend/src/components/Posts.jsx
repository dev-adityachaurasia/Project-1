import PostHeader from "../components/Post/PostHeader";
import PostImage from "../components/Post/PostImage";
import PostComments from "./Post/PostComments";

const Posts = ({ img, desc, userid, year, post, postTime ,id }) => {
  function timeAgo(timestamp) {
    const now = new Date();
    const timeStampDate = new Date(timestamp);
    const diffInMs = now - timeStampDate; // Difference in milliseconds

    const diffInSec = Math.floor(diffInMs / 1000); // Convert to seconds
    const diffInMin = Math.floor(diffInSec / 60); // Convert to minutes
    const diffInHrs = Math.floor(diffInMin / 60); // Convert to hours
    const diffInDays = Math.floor(diffInHrs / 24); // Convert to days

    if (diffInSec < 60) {
      return `${diffInSec} sec${diffInSec === 1 ? "" : "s"} ago`;
    } else if (diffInMin < 60) {
      return `${diffInMin} min${diffInMin === 1 ? "" : "s"} ago`;
    } else if (diffInHrs < 24) {
      return `${diffInHrs} hr${diffInHrs === 1 ? "" : "s"} ago`;
    } else {
      return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
    }
  }
  // Example usage:
  const time = timeAgo(postTime);

  return (
    <div className="w-[468px] flex flex-col p-4">
      <PostHeader img={img} userid={userid} year={year} postTime={time} />
      <PostImage post={post} id={id}  />
      <PostComments desc={desc}></PostComments>
      
    </div>
  );
};

export default Posts;
