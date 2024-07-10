import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth.jsx";
import { Div } from "./styles/fallbackUI/FallbackUIStyle";
const PostDetails = lazy(() => import("./pages/PostDetails.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Comment = lazy(() => import("./pages/Comment.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Div>Loading...</Div>}>
        <Routes>
          <Route
            path="/"
            element={
              <Auth>
                <Home />
              </Auth>
            }
          />
          <Route
            path="/postDetails/:id"
            element={
              <Auth>
                <PostDetails />{" "}
              </Auth>
            }
          />
          <Route
            path="/comments/:id"
            element={
              <Auth>
                <Comment />
              </Auth>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
