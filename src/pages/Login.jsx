import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getAuth } from "../services/loginService";
import {
  LoginContainer,
  LoginForm,
  InputField,
  SubmitButton,
  P,
} from "../styles/login/LoginStyle";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const emailValidation = validation.email && !loginData.email.includes("@");
  const passwordValidation =
    validation.password && loginData.password.length < 6;

  const loginChangeHandler = (identifier, value) => {
    setLoginData({ ...loginData, [identifier]: value });
    setValidation((prev) => ({ ...prev, [identifier]: false }));
  };

  const blurHandler = (identifier) => {
    setValidation((prev) => ({ ...prev, [identifier]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!loginData.email) {
      setValidation((prev) => ({ ...prev, email: true }));
    }
    if (!loginData.password) {
      setValidation((prev) => ({ ...prev, password: true }));
    }

    if (
      !emailValidation &&
      !passwordValidation &&
      loginData.email &&
      loginData.password
    ) {
      const matchedUser = users.find(
        (user) =>
          user?.email === loginData?.email &&
          user?.phone === loginData?.password
      );
      if (matchedUser) {
        navigate("/");
        localStorage.setItem("token", JSON.stringify(matchedUser));
        toast.success("Login successfully");
      } else {
        toast.error("Invalid email or password, Please try again!!");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getAuth();
        setUsers(users);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginForm onSubmit={handleSubmit}>
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => loginChangeHandler("email", e.target.value)}
          onBlur={() => blurHandler("email")}
        />
        <div>
          {validation.email && !loginData.email && <P>Email is required</P>}
        </div>
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => loginChangeHandler("password", e.target.value)}
          onBlur={() => blurHandler("password")}
        />
        <div>
          {validation.password && !loginData.password && (
            <P>Password is required</P>
          )}
        </div>
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
