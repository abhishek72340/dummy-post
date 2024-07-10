import { usePost } from "../context/post-context";
import {
  Container,
  Input,
  TextArea,
  AddCommentButton,
} from "../styles/addComment/AddCommentStyle.js";

const AddComment = () => {
  const { changeCommentHandler, addComment, submitCommentHandler } = usePost();

  return (
    <div>
      <form onSubmit={submitCommentHandler}>
        <Container>
          <label>Name</label>
          <Input
            type="text"
            name="name"
            value={addComment.name}
            onChange={changeCommentHandler}
            required
          />
        </Container>

        <Container>
          <label>Email</label>
          <Input
            type="email"
            name="email"
            value={addComment.email}
            required
            onChange={changeCommentHandler}
          />
        </Container>

        <Container>
          <label>Comment</label>
          <TextArea
            name="comment"
            value={addComment.comment}
            required
            onChange={changeCommentHandler}
          />
        </Container>
        <AddCommentButton type="submit">Submit</AddCommentButton>
      </form>
    </div>
  );
};

export default AddComment;
