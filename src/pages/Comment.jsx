import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddComment from "../components/AddComment";
import { usePost } from "../context/post-context";
import { getComments } from "../services/commentService";
import {
  H3,
  Span,
  Ul,
  BackButton,
  CommentButtonContainer,
  CommentButton,
} from "../styles/comment/CommentStyle.js";

const Comment = () => {
  const [commentData, setCommentData] = useState([]);
  const { id } = useParams();
  const { comments, setAddComments, addComments } = usePost();
  const navigate = useNavigate();

  const addCommentHandler = () => {
    setAddComments(!addComments);
  };
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const comments = await getComments(id);
        setCommentData(comments);
      } catch (err) {
        console.error(err);
      }
    };

    fetchComments();
  }, [id]);

  return (
    <>
      <BackButton onClick={() => navigate("/")}>Go Back</BackButton>
      <H3>Comments</H3>
      <Ul>
        {commentData.map((item) => (
          <li key={item.id}>
            <h4>
              <Span>Name:</Span> {item.name}
            </h4>
            <p>
              <Span>Email:</Span> {item.email}
            </p>
            <p>
              <Span>Comment:</Span> {item.body}
            </p>
          </li>
        ))}
      </Ul>
      <Ul>
        {comments?.map((comment, index) => (
          <li key={index}>
            <h4>
              <Span>Name:</Span> {comment.name}
            </h4>
            <p>
              <Span>Email:</Span> {comment.email}
            </p>
            <p>
              <Span>Comment:</Span> {comment.comment}
            </p>
          </li>
        ))}
      </Ul>
      <CommentButtonContainer>
        <CommentButton onClick={addCommentHandler}>
          {addComments ? "Close Comment" : "Add Comment"}
        </CommentButton>
      </CommentButtonContainer>
      {addComments && <AddComment />}
    </>
  );
};

export default Comment;
