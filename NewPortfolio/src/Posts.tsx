import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const Posts = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [commentContent, setCommentContent] = useState("");
  const [visibleComment, setVisibleComment] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setLikeCount(likeCount + 1);
        }}
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M933.387 517.868C950.274 477.276 960 431.509 960 382.887c0-165.301-109.993-299.305-245.677-299.305-83.964 0-158.011 51.39-202.323 129.684-44.31-78.295-118.357-129.685-202.321-129.685C173.994 83.581 64 217.586 64 382.887c0 57.701 13.632 111.398 36.851 157.102 56.694 135.957 196.112 269.389 414.1 400.428 149.872-95.245 273.613-208.473 368.923-341.271 14.435-16.802 49.513-81.278 49.513-81.278z"
            fill="#FF3B30"
          />
          <path
            d="M484 254.385c8.327-14.713 17.706-28.474 28-41.12-57.022-96.69-134.136-129.682-202.321-129.682-9.409 0-18.659 0.786-27.794 2.039C354.075 95.7 444.727 184.995 484 254.385zM714.323 83.583c-9.547 0-18.946 0.75-28.206 2.039C808.697 102.462 904 229.049 904 382.888c0 48.623-9.724 94.386-26.613 134.982 0 0-35.08 64.473-49.515 81.277-89.475 124.668-204.315 231.88-342.002 323.366 9.592 5.971 19.163 11.942 29.079 17.905 149.872-95.244 273.613-208.474 368.923-341.271 14.434-16.805 49.514-81.277 49.514-81.277C950.276 477.274 960 431.511 960 382.888c0-165.302-109.993-299.305-245.677-299.305z"
            fill=""
          />
        </svg>
      </button>
      <div>{likeCount}</div>

      <hr />
      <hr />

      {!visibleComment && (
        <input
          type="text"
          onChange={(e) => {
            setCommentContent(e.target.value);
          }}
        />
      )}
      {visibleComment && <div>{commentContent}</div>}
      {!visibleComment && (
        <button onClick={() => setVisibleComment(true)}>post comment</button>
      )}

      <hr />
      <hr />
    </div>
  );
};

export default Posts;
