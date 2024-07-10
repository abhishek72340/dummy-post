import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Button, ButtonContainer, H4 } from "../styles/header/HeaderStyle.js";
import { FaUser } from "react-icons/fa";

const token = JSON.parse(localStorage.getItem("token"));
const Header = () => {
  const navigate = useNavigate();
  const LogoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("Logout successful");
  };
  return (
    <div>
      <ButtonContainer>
        <FaUser />
        <H4>{token?.username}</H4>
        <Button onClick={LogoutHandler}>Log Out</Button>
      </ButtonContainer>
    </div>
  );
};

export default Header;
