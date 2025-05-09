import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { refreshThunk } from "./redux/auth/operations";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";
import PublicRoutes from "./routes/PublicRoutes/PublicRoutes";
import { selectIsRefresh } from "./redux/auth/slice";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="register" element={<Register />} />
          <Route
            path="login"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
        </Routes>
        <ToastContainer theme="colored" />
      </Suspense>
    </>
  );
}

export default App;