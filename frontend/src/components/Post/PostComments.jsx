const PostComments = ({ desc, comment }) => {
  return (
    <div>
      {/* <h1 className="font-semibold text-sm">{like} likes</h1> */}

      <p className="text-sm pt-1">{desc}</p>

      {/* <p className="text-sm mt-1 text-gray-400">{comment} Comments</p>
      <input
        type="text"
        className="text-sm text-gray-400 mt-2 w-full outline-none"
        placeholder="Add Comment ..."
      /> */}
      <div className="border border-solid border-b my-5"></div>
    </div>
  );
};

export default PostComments;
