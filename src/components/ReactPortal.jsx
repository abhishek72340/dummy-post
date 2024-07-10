import { useState, useEffect } from "react";
import PortalModal from "./PortalModal";
import toast from "react-hot-toast";
import { getPost } from "../services/postService";
import { Button, P } from "../styles/reactPortal/ReactPortalStyle.js";

const ReactPortal = ({ postData, setPostData, isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    userId: "",
    title: "",
    body: "",
  });
  const [validation, setValidation] = useState({
    userId: false,
    title: false,
    body: false,
  });
  const userIdValidation =
    validation.userId && formData.userId.trim().length === 0;
  const titleValidation =
    validation.title && formData.title.trim().length === 0;
  const bodyValidation = validation.body && formData.body.trim().length === 0;

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const data = await getPost();
        setPostData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPostData();
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const changeHandler = (identifier, value) => {
    setFormData((prev) => ({ ...prev, [identifier]: value }));
    setValidation((prev) => ({ ...prev, [identifier]: false }));
  };
  const blurHandler = (identifier) => {
    setValidation((prev) => ({ ...prev, [identifier]: true }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!formData.userId || !formData.title || !formData.body) {
      setValidation({
        userId: !formData.userId,
        title: !formData.title,
        body: !formData.body,
      });
      return;
    }

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const result = await res.json();
      if (result) {
        toast.success("Post added successfully!");
        setIsOpen(false);
        setFormData({
          userId: "",
          title: "",
          body: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {" "}
      <PortalModal isOpen={isOpen} onClose={closeModal}>
        <form onSubmit={submitHandler}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="userId">Enter UserId</label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={(e) => changeHandler("userId", e.target.value)}
              onBlur={() => blurHandler("userId")}
              style={{ padding: "8px", width: "100%" }}
            />
            {userIdValidation && <P>UserId is required</P>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="title">Enter Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) => changeHandler("title", e.target.value)}
              onBlur={() => blurHandler("title")}
              style={{ padding: "8px", width: "100%" }}
            />
            {titleValidation && <P>Title is required</P>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="body">Enter Body</label>
            <input
              type="text"
              id="body"
              name="body"
              value={formData.body}
              onChange={(e) => changeHandler("body", e.target.value)}
              onBlur={() => blurHandler("body")}
              style={{ padding: "8px", width: "100%" }}
            />
            {bodyValidation && <P>Body is required</P>}
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PortalModal>
    </div>
  );
};

export default ReactPortal;
