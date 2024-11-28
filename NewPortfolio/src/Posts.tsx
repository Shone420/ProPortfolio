import { useState } from "react";
import Homeicon from "../public/Homeicon.png";
import { Link } from "react-router-dom";
import Food from "../public/Food.png";
import Jimmy from "../public/Jimmy.png";
import Coffee from "../public/Coffee.png";
import Moment from "../public/Moment.png";
import Tree from "../public/Tree.png";
import Ulsports from "../public/Ul Sports.png";

const Post = ({ post }) => {
  
  const [reactions, setReactions] = useState({
    love: 224,
    like: 190,
    laugh: 50,
    sad: 12,
    angry: 10,
  });

  const [commentContent, setCommentContent] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleReaction = (type) => {
    setReactions((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleAddComment = () => {
    if (commentContent.trim()) {
      setComments((prev) => [...prev, commentContent.trim()]);
      setCommentContent("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1E201E",
        color: "#fff",
        padding: "15px",
        borderRadius: "10px",
        maxWidth: "300px",
        margin: "20px auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s ease-in-out", 
      }}
      className="post-container"
    >
      {/* Image Section */}
      <div style={{ position: "relative" }}>
        <img
          src={post.image}
          alt="Post"
          style={{
            height: "300px",
            width: "100%",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            backgroundColor: "#00000099",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          <span style={{ fontSize: "14px", color: "#fff" }}>{post.title}</span>
        </div>
      </div>

      {/* Reaction Buttons Section */}
      <div style={{ display: "flex", justifyContent: "space-around", margin: "15px 0" }}>
        {[
          { type: "love", color: "#FF3B30", label: "❤️" },
          { type: "like", color: "#007bff", label: "👍" },
          { type: "laugh", color: "#ffcc00", label: "😂" },
          { type: "sad", color: "#605DEC", label: "😢" },
          { type: "angry", color: "#FF5733", label: "😡" },
        ].map(({ type, color, label }) => (
          <button
            key={type}
            onClick={() => handleReaction(type)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                color,
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) => {
                (e.target as HTMLSpanElement).style.transform = "scale(1.2)";
              }}
              onMouseOut={(e) => {
                (e.target as HTMLSpanElement).style.transform = "scale(1)";
              }}
            >
              {label}
            </span>
            <span style={{ fontSize: "12px", marginTop: "5px", color: "#fff" }}>
              {reactions[type]}
            </span>
          </button>
        ))}
      </div>

      <hr style={{ borderColor: "#fff" }} />

      {/* Comment Section */}
      <input
        type="text"
        placeholder="Write a comment..."
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={handleAddComment}
        style={{
          backgroundColor: "#FF3B30",
          color: "#fff",
          padding: "8px 12px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Post Comment
      </button>
      <div style={{ marginTop: "10px" }}>
        {comments.map((comment, index) => (
          <div
            key={index}
            style={{
              padding: "8px",
              backgroundColor: "#ffffff22",
              borderRadius: "5px",
              marginBottom: "5px",
            }}
          >
            {comment}
          </div>
        ))}
      </div>

      <hr style={{ borderColor: "#fff" }} />
    </div>
  );
};

const Posts = () => {
  const posts = [
    { id: 1, title: "Pizzaa!!", image: Food },
    { id: 2, title: "Hot Chocalate", image: Coffee },
    { id: 3, title: "My Lazy Cat", image: Jimmy },
    { id: 4, title: "Surreal", image: Moment },
    { id: 5, title: "Evening Greens", image: Ulsports },
    { id: 6, title: "Veins of Nature", image: Tree },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#2B3A35",
        padding: "20px",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            flex: "0 0 auto",
            width: "400px", 
          }}
          className="post-container"
        >
          <Post post={post} />
        </div>
      ))}

      {/* Top Icon Section */}
      <div>
        <Link to="/ProPortfolio">
          <img
            src={Homeicon}
            alt="Home"
            style={{
              position: "absolute",
              left: "92%",
              top: "6%",
              width: "50px",
              height: "auto",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Posts;
