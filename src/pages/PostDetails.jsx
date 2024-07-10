import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPostDetails } from "../services/postDetailsService";
import {
  BackButton,
  Card,
  CardItem,
  CardTitle,
} from "../styles/postDetail/PostDetailStyle";

const PostDetails = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const posts = await getPostDetails(id);
        setPostDetail(posts);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPostDetails();
  }, [id]);

  return (
    <div>
      <BackButton onClick={() => navigate("/")}>Go Back</BackButton>

      <CardTitle>Post Details</CardTitle>
      <Card>
        <CardItem>
          <b>Id:</b> {postDetail?.id}
        </CardItem>
        <CardItem>
          <b>Title:</b> {postDetail?.title}
        </CardItem>
        <CardItem>
          <b>Body:</b> {postDetail?.body}
        </CardItem>
      </Card>
    </div>
  );
};

export default PostDetails;
