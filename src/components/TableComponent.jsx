import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPortal from "../components/ReactPortal";
import {
  TableContainer,
  AddPostContainer,
  AddPostButton,
  StyledTable,
  Th,
  Td,
  Button,
} from "../styles/table/TableStyle.js";

const TableComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postData, setPostData] = useState([]);
  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const navigate = useNavigate();

  return (
    <TableContainer>
      <AddPostContainer>
        <AddPostButton onClick={openModal}>Add Post</AddPostButton>
      </AddPostContainer>

      <ReactPortal
        postData={postData}
        setPostData={setPostData}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <StyledTable>
        <thead>
          <tr>
            <Th>Id</Th>
            <Th>Title</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {postData?.map((data) => (
            <tr key={data?.id}>
              <Td>{data?.id}</Td>
              <Td>
                <a href={`/postDetails/${data.id}`}>{data?.title}</a>
              </Td>
              <Td>
                <Button onClick={() => navigate(`/comments/${data.id}`)}>
                  Comment
                </Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default TableComponent;
