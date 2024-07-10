import { useState, useEffect } from "react";
import PortalModal from "./PortalModal";
import toast from "react-hot-toast";
import { getPost } from "../services/postService";
import { Button, P } from "../styles/reactPortal/ReactPortalStyle.js";

const ReactPortal = ({ postData, setPostData, isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const [validation, setValidation] = useState({
    title: false,
    body: false,
  });

  const titleValidation =
    validation.title && formData.title.trim().length === 0;
  const bodyValidation = validation.body && formData.body.trim().length === 0;

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const data = await getPost();
        const user = JSON.parse(localStorage.getItem("token"));
        const userPosts = data?.filter((post) => post?.userId === user?.id);
        setPostData(userPosts);
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
    const user = JSON.parse(localStorage.getItem("token"));

    if (!formData.title) {
      setValidation((prev) => ({ ...prev, title: true }));
    }
    if (!formData.body) {
      setValidation((prev) => ({ ...prev, body: true }));
    }

    // if (!formData.title || !formData.body) {
    //   setValidation({
    //     title: !formData.title,
    //     body: !formData.body,
    //   });
    //   return;
    // }

    if (
      !titleValidation &&
      !bodyValidation &&
      formData.title &&
      formData.body
    ) {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: formData.title,
            body: formData.body,
            userId: user.id,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        const result = await res.json();
        if (result) {
          toast.success("Post added successfully!");
          setPostData((prev) => [...prev, result]);
          setIsOpen(false);
          setFormData({
            title: "",
            body: "",
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <PortalModal isOpen={isOpen} onClose={closeModal}>
        <form onSubmit={submitHandler}>
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
