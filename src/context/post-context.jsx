import { createContext, useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [addComments, setAddComments] = useState(false);
  const [addComment, setAddComment] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const changeCommentHandler = (e) => {
    const { name, value } = e.target;
    setAddComment({ ...addComment, [name]: value });
  };

  const submitCommentHandler = (e) => {
    e.preventDefault();
    const { name, email, comment } = addComment;
    setComments([...comments, { name, email, comment }]);
    setAddComment({ name: "", email: "", comment: "" });
    toast.success("Comment added successfully");
    setAddComments(false);
  };
  return (
    <PostContext.Provider
      value={{
        changeCommentHandler,
        submitCommentHandler,
        comments,
        addComment,
        setAddComments,
        addComments,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => useContext(PostContext);
export { PostProvider, usePost };
