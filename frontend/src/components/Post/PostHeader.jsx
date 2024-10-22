const PostHeader = ({ img, userid, year, postTime }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={img}
          alt="Profile"
          className="h-12 w-12 rounded-full p-[1px] mr-3 border-2 border-solid border-red-200"
        />
        <div>
          <h1 className="text-sm font-semibold">
            {userid} <i className="font-normal">{year} year</i>
          </h1>
          <p className="text-xs text-gray-500">{postTime}</p>
        </div>
      </div>
      <div className="cursor-pointer">
        <svg
          aria-label="More options"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>More options</title>
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="6" cy="12" r="1.5"></circle>
          <circle cx="18" cy="12" r="1.5"></circle>
        </svg>
      </div>
    </div>
  );
};

export default PostHeader;
