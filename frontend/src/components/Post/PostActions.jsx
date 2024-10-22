import { useEffect, useState } from "react";
import axios from "../../utils/axios";

const PostActions = ({ id }) => {
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const isLiked = async () => {
      try {
        const res = await axios.post(
          `/isliked/${id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setIsLiked(res.data.isLiked);
      } catch (error) {
        console.error(error);
      }
    };
    isLiked();
  }, []);

  const likePost = async () => {
    try {
      if (!isLiked) {
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
      } else {
        console.log("object")
        let res = await axios.post(
          `/dislike/${id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
      }
      if (res.data) {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex justify-between items-center mt-2">
      <div className="flex gap-2 items-center">
        <svg
          onClick={likePost}
          aria-label="Like"
          height="26"
          width="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke={isLiked ? "#cd1818" : "#000000"}
        >
          {" "}
          <path
            d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
            fill={isLiked ? "#cd1818" : "#fffff"}
          />{" "}
        </svg>
        <svg width="22px" height="22px" viewBox="0 0 32 32" version="1.1">
          <title>comment-4</title>
          <desc>Created with Sketch Beta.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="#363853"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            sketch:type="MSPage"
          >
            <g
              id="Icon-Set"
              sketch:type="MSLayerGroup"
              transform="translate(-308.000000, -255.000000)"
              fill="#000000"
            >
              <path
                d="M327.494,279.633 L324,284 L320.506,279.633 C314.464,278.355 309.992,273.863 309.992,268.501 C309.992,262.146 316.264,256.994 324,256.994 C331.736,256.994 338.008,262.146 338.008,268.501 C338.008,273.863 333.536,278.355 327.494,279.633 L327.494,279.633 Z M324,255 C315.163,255 308,261.143 308,268.72 C308,274.969 312.877,280.232 319.542,281.889 L324,287.001 L328.459,281.889 C335.123,280.232 340,274.969 340,268.72 C340,261.143 332.837,255 324,255 L324,255 Z"
                id="comment-4"
                sketch:type="MSShapeGroup"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
        <path
          d="M19 19.2674V7.84496C19 5.64147 17.4253 3.74489 15.2391 3.31522C13.1006 2.89493 10.8994 2.89493 8.76089 3.31522C6.57467 3.74489 5 5.64147 5 7.84496V19.2674C5 20.6038 6.46752 21.4355 7.63416 20.7604L10.8211 18.9159C11.5492 18.4945 12.4508 18.4945 13.1789 18.9159L16.3658 20.7604C17.5325 21.4355 19 20.6038 19 19.2674Z"
          stroke="#363853"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default PostActions;
